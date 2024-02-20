


:- use_module(library(http/json)),
    use_module(library(http/json_convert)),
    use_module(library(dicts)).
:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).
:- use_module(library(http/http_parameters)).
:- use_module(library(http/http_open)).
:- use_module(library(http/http_cors)).
:- use_module(library(http/http_json)).
:- use_module(library(http/http_server)).
:- use_module(library(http/http_parameters)).



startServer(Port) :-
    http_server(http_dispatch, [port(Port)]),
    asserta(port(Port)).


stopServer:-
    retract(port(Port)),
    http_stop_server(Port,_).

:- set_setting(http:cors, [*]).

:- http_handler('/fastest',getFastest,[]).
getFastest(Request):-
    cors_enable(Request, [methods([get])]),

    http_parameters(Request,
                    [ dateDeliveries(DateD,[string]),
                      truckPlates(PL,[list(string)])
                    ]),
    runFastestSolution(DateD,PL,LCBestID,FullTimes,Trucks),
    maplist(toCities,LCBestID,LCBest),
    toTrips(LCBest,Trucks,FullTimes,LTrips),
    sum_list(FullTimes,TotalTime),
    Answer=point{totalTime:TotalTime,trips:LTrips},
    reply_json_dict(Answer).


:- http_handler('/distanceHeuristics',getDistanceHeuristics,[]).
getDistanceHeuristics(Request):-
    cors_enable(Request, [methods([get])]),

    http_parameters(Request,
                    [ dateDeliveries(DateD,[string]),
                      truckPlates(PL,[list(string)])
                    ]),
    runDistanceHeuristicsSolution(DateD,PL,LCBestID,FullTimes,Trucks),
    maplist(toCities,LCBestID,LCBest),
    toTrips(LCBest,Trucks,FullTimes,LTrips),
    sum_list(FullTimes,TotalTime),
    Answer=point{totalTime:TotalTime,trips:LTrips},
    reply_json_dict(Answer).

:- http_handler('/weightHeuristics',getWeightHeuristics,[]).
getWeightHeuristics(Request):-
    cors_enable(Request, [methods([get])]),

    http_parameters(Request,
                    [ dateDeliveries(DateD,[string]),
                      truckPlates(PL,[list(string)])
                    ]),
    runWeightHeuristicsSolution(DateD,PL,LCBestID,FullTimes,Trucks),
    maplist(toCities,LCBestID,LCBest),
    toTrips(LCBest,Trucks,FullTimes,LTrips),
    sum_list(FullTimes,TotalTime),
    Answer=point{totalTime:TotalTime,trips:LTrips},
    reply_json_dict(Answer).

:- http_handler('/combinedHeuristics',getCombinedHeuristics,[]).
getCombinedHeuristics(Request):-
    cors_enable(Request, [methods([get])]),

    http_parameters(Request,
                    [ dateDeliveries(DateD,[string]),
                      truckPlates(PL,[list(string)])
                    ]),
    runCombinedHeuristicsSolution(DateD,PL,LCBestID,FullTimes,Trucks),
    maplist(toCities,LCBestID,LCBest),
    toTrips(LCBest,Trucks,FullTimes,LTrips),
    sum_list(FullTimes,TotalTime),
    Answer=point{totalTime:TotalTime,trips:LTrips},
    reply_json_dict(Answer).


toTrips([],[],[],[]).
toTrips([C|LC],[T|LT],[NT|LNT],[Answer|LA]):-
       toTrips(LC,LT,LNT,LA),
       term_string(TT,T),
       Answer=point{truck:TT,cities:C,necessaryTime:NT}.



getDataFromURL(URL,Name,Arguments) :-
       setup_call_cleanup(
        http_open(URL, In, [request_header('Accept'='application/json')]),
        (json_read_dict(In, Data,[default_tag(Name)]),
        (dicts_to_compounds(Data,Arguments, dict_fill(null),Compounds);
        dicts_to_compounds([Data],Arguments, dict_fill(null),Compounds)),
        assertCompounds(Compounds)),
        close(In)).


getDeliveriesForDate(Date):-
       linkPropertyDelivery(URL,Name,Arguments,_),
       string_concat(URL,"/ByDate/?date=",X),
       string_concat(X,Date,FilterURL),
       getDataFromURL(FilterURL,Name,Arguments).

getTruckForPlate(PL):-
       linkPropertyTruck(URL,Name,Arguments,_),
       string_concat(URL,"/",X),
       string_concat(X,PL,FilterURL),
       getDataFromURL(FilterURL,Name,Arguments).


/*
linkPropertyDelivery("https://localhost:5001/api/Deliveries",'delivery',[id,deliveryDate,massOfDelivery,warehouseId,timeToPlaceDelivery,timeToPickUpDelivery],delivery/6).
linkPropertyTruck("http://localhost:3000/api/trucks",'featuresTruck',[licensePlate,tare,loadCapacity,totalBatteryCapacity,autonomyWithMaxLoad,rechargeTime],featuresTruck/6).

linkProperty("http://localhost:3000/api/routes",'dataTruck_t_e_ta',[truckId,originId,destinationId,time,energy,extraTime],dataTruck_t_e_ta/6).
linkProperty("https://localhost:5001/api/MainWarehouse",'mainWarehouse',[id],mainWarehouse/1).

linkProperty("https://localhost:5001/api/Warehouses",'warehouse',[id,designation,address,lat,lng,altitude],warehouse/6).
*/


linkPropertyDelivery("https://warehouseslapr5.azurewebsites.net/api/Deliveries",'delivery',[id,deliveryDate,massOfDelivery,warehouseId,timeToPlaceDelivery,timeToPickUpDelivery],delivery/6).
linkPropertyTruck("https://dockerplanning.azurewebsites.net/api/trucks",'featuresTruck',[licensePlate,tare,loadCapacity,totalBatteryCapacity,autonomyWithMaxLoad,rechargeTime],featuresTruck/6).

linkProperty("https://dockerplanning.azurewebsites.net/api/routes",'dataTruck_t_e_ta',[truckId,originId,destinationId,time,energy,extraTime],dataTruck_t_e_ta/6).
linkProperty("https://warehouseslapr5.azurewebsites.net/api/MainWarehouse",'mainWarehouse',[id],mainWarehouse/1).

linkProperty("https://warehouseslapr5.azurewebsites.net/api/Warehouses",'warehouse',[id,designation,address,lat,lng,altitude],warehouse/6).



preparationManyTrucks(Date,PL):-clearData(),fetchData(),abolish(delivery/6),getDeliveriesForDate(Date),abolish(featuresTruck/6),maplist(getTruckForPlate,PL).


toCities([],[]).
toCities([C|LC],[CityAnswer|LCA]):-
       toCities(LC,LCA),
       warehouse(C,Des,Ad,Lat,Lng,Alt),
       CityAnswer=point{cityId:C,destination:Des,address:Ad,lat:Lat,lng:Lng,alt:Alt}.



clearData():-findall(Assert,linkProperty(_,_,_,Assert),Asserts),clearAsserts(Asserts).

clearAsserts([]).
clearAsserts([A|L]):-abolish(A),clearAsserts(L).


fetchData():-findall(Link,linkProperty(Link,_,_,_),Links),readLinks(Links).

readLinks([]).
readLinks([URL|L]):-
  linkProperty(URL,Name,Arguments,_),
  getDataFromURL(URL,Name,Arguments),
  readLinks(L).


getDictionariesFromPath(FPath) :-
  open(FPath, read, Stream),
  linkProperty(FPath,Name,Arguments,_),
  json_read_dict(Stream, Dicty,[default_tag(Name)]),
  dicts_to_compounds(Dicty,Arguments, dict_fill(null),Compounds),
  close(Stream),
  assertCompounds(Compounds).

assertCompounds([]).
assertCompounds([X|L]):-assertz(X),assertCompounds(L).


%:-startServer(5030).
