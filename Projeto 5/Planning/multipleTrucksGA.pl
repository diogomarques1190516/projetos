:- consult('knowledgeBase').
:- consult('road').
:- consult('heuristics').
:- consult('splittingDeliveries').
:- consult('geneticAlgorithmMany').
:- consult('data').



loadEntregas(WarehouseID):-
    delivery(F1,F2,F3,WarehouseID,F5,F6),
    assertz(entrega(F1,F2,F3,WarehouseID,F5,F6)).

loadCarateristicasCam(TID):-
    atom_to_term(TID,TT,_),
    atom_string(TT,TString),
    featuresTruck(TString,F2,F3,F4,F5,F6),
    assertz(carateristicasCam(TString,F2,F3,F4,F5,F6)).


runForMany(GeraCities,GeraTimes):-
    findall(Truck,featuresTruck(Truck,_,_,_,_,_),TruckList),
    divideDeliveriesGA(TruckList,TruckResult,DeliveriesRes),
    write(DeliveriesRes),
    forEachTruck(TruckResult,DeliveriesRes,GeraCities,GeraTimes),nl,nl,
    !.

forEachTruck([],[],[],[]).
forEachTruck([T|TL],[D|DL],[LC|LLC],[Time|LTime]):-
    retractall(entrega(_,_,_,_,_,_)),
    retractall(carateristicasCam(_,_,_,_,_,_)),

    loadCarateristicasCam(T),
    maplist(loadEntregas,D),
    gera(),
    lowestTimeGera(LC,Time),
    forEachTruck(TL,DL,LLC,LTime).




divideDeliveriesGA(LTrucks,Trucks1,Deliveries1):-
    addTruckToCalculations(LTrucks,LTrucksForDivision),
    findall(ID,delivery(_,_,_,ID,_,_),LDeliveries),
    disperseTrucksForDeliveries(LTrucksForDivision,LDeliveries,LDispersedTrucks),
    maplist(weightDelivery,LDeliveries,LDeliveriesWeights),
    sortDeliveriesByWeight(LDeliveries,LDeliveriesWeights,LSortedDeliveriesIds,LSortedDeliveriesWeights),
    groupByTruck(LSortedDeliveriesIds,LSortedDeliveriesWeights,LDispersedTrucks,TruckDeliveries),
    maplist(pairSecond,TruckDeliveries,Deliveries1),
    maplist(pairFirst,TruckDeliveries,Trucks1).


delivery(4439, 20221205, 200, 1, 8, 10).
delivery(4438, 20221205, 150, 9, 7, 9).
delivery(4445, 20221205, 100, 3, 5, 7).
delivery(4443, 20221205, 120, 8, 6, 8).
delivery(4449, 20221205, 300, 11, 15, 20).

delivery(4398, 20221205, 310, 17, 16, 20).
delivery(4432, 20221205, 270, 14, 14, 18).
delivery(4437, 20221205, 180, 12, 9, 11).
delivery(4451, 20221205, 220, 6, 9, 12).
delivery(4452, 20221205, 390, 13, 21, 26).

delivery(4198, 20221205, 315, 2, 1, 2).
delivery(4132, 20221205, 275, 4, 2, 15).
delivery(4137, 20221205, 185, 13, 3, 14).
delivery(4151, 20221205, 225, 7, 4, 19).
delivery(4151, 20221205, 370, 10, 22, 23).


featuresTruck("eTruck03",7500,1500,80,100,60).
featuresTruck("eTruck02",7500,1500,80,100,60).
featuresTruck("eTruck01",7500,1500,80,100,60).









