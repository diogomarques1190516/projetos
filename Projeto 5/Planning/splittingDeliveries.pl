

:-use_module(library(pairs)).

%problem with many deliveries to one warehouse



runFastestSolution(Date,LTrucks,LCBest,Times,Trucks):-
    divideDeliveries(Date,LTrucks,Trucks,Deliveries),!,
    runSolution1ForMany(Trucks,Deliveries,LCBest,Times),!.

runDistanceHeuristicsSolution(Date,LTrucks,LCBest,Times,Trucks):-
    divideDeliveries(Date,LTrucks,Trucks,Delivs),!,
    runSolution2ForMany(Trucks,Delivs,LCBest,Times),!.

runWeightHeuristicsSolution(Date,LTrucks,LCBest,Times,Trucks):-
    divideDeliveries(Date,LTrucks,Trucks,Delivs),!,
    runSolution3ForMany(Trucks,Delivs,LCBest,Times),!.


runCombinedHeuristicsSolution(Date,LTrucks,LCBest,Times,Trucks):-
    divideDeliveries(Date,LTrucks,Trucks,Delivs),!,
    runSolution4ForMany(Trucks,Delivs,LCBest,Times),!.



runSolution1ForMany([],[],[],[]).
runSolution1ForMany([T|Trucks],[D|Deliveries],[LCBest|LLCB],[Time|LTimes]):-
    atom_to_term(T,TT,_),
    atom_string(TT,TString),
    solution1(TString,D,Time,LCBest),runSolution1ForMany(Trucks,Deliveries,LLCB,LTimes).

runSolution2ForMany([],[],[],[]).
runSolution2ForMany([T|Trucks],[D|Deliveries],[LCBest|LLCB],[Time|LTimes]):-
    atom_to_term(T,TT,_),
    atom_string(TT,TString),
    calculateTimesH1(TString,D,Time,LCBest),runSolution2ForMany(Trucks,Deliveries,LLCB,LTimes).

runSolution3ForMany([],[],[],[]).
runSolution3ForMany([T|Trucks],[D|Deliveries],[LCBest|LLCB],[Time|LTimes]):-
    atom_to_term(T,TT,_),
    atom_string(TT,TString),
    calculateTimesH2(TString,D,Time,LCBest),runSolution3ForMany(Trucks,Deliveries,LLCB,LTimes).

runSolution4ForMany([],[],[],[]).
runSolution4ForMany([T|Trucks],[D|Deliveries],[LCBest|LLCB],[Time|LTimes]):-
    atom_to_term(T,TT,_),
    atom_string(TT,TString),
    calculateTimesH3(TString,D,Time,LCBest),runSolution4ForMany(Trucks,Deliveries,LLCB,LTimes).





solution1(PL,LC,Time,LCBest):-lowestTimeSequence(PL,LC,LCBest,Time,_).

divideDeliveries(Date,LTrucks,Trucks1,Deliveries1):-
    preparationManyTrucks(Date,LTrucks),
    addTruckToCalculations(LTrucks,LTrucksForDivision),
    findall(ID,delivery(_,_,_,ID,_,_),LDeliveries),
    disperseTrucksForDeliveries(LTrucksForDivision,LDeliveries,LDispersedTrucks),
    maplist(weightDelivery,LDeliveries,LDeliveriesWeights),
    sortDeliveriesByWeight(LDeliveries,LDeliveriesWeights,LSortedDeliveriesIds,LSortedDeliveriesWeights),
    groupByTruck(LSortedDeliveriesIds,LSortedDeliveriesWeights,LDispersedTrucks,TruckDeliveries),
    maplist(pairSecond,TruckDeliveries,Deliveries1),
    maplist(pairFirst,TruckDeliveries,Trucks1).


weightDelivery(ID,W):-delivery(_,_,W,ID,_,_).


disperseTrucksForDeliveries(LTFD,LD,LDispersed):-
    disperseInside(LTFD,LTFD,LD,LDispersed).

disperseInside(_,_,[],[]).
disperseInside([],LALLT,LD,LDT):-
    reverse(LALLT,RL),
    disperseInside(RL,RL,LD,LDT).
disperseInside([TFD|LTFD],LALLT,[_|LD],[TFD|LDT]):-
    disperseInside(LTFD,LALLT,LD,LDT).

groupByTruck(List,ListWeights,ListT,PairGrouped) :-
  createPairs(List,ListT,ListP),
  createPairs(ListWeights,ListT,ListPW),
  keysort(ListP, ListPS),
  keysort(ListPW, ListPSW),
  group_pairs_by_key(ListPS,PairGrouped),
  group_pairs_by_key(ListPSW,PairGroupedW),
  maplist(pairFirst,PairGrouped,Trucks),
  maplist(pairSecond,PairGroupedW,Weights),
  checkIfDoesntOvercomeLimitsOfTrucks(Trucks,Weights).

checkIfDoesntOvercomeLimitsOfTrucks([],[]).
checkIfDoesntOvercomeLimitsOfTrucks([T|LT],[LD|LLD]):-
    atom_to_term(T,TT,_),
    atom_string(TT,TString),
    capacityWeight(TString,Capacity),
    sum_list(LD,SumLD),
    Capacity>=SumLD,
    checkIfDoesntOvercomeLimitsOfTrucks(LT,LLD).



sortDeliveriesByWeight(List,ListW,ListSorted,WeightsSorted) :-
  createPairs(List,ListW,ListP),
  keysort(ListP, Pairs),
  maplist(pairSecond,Pairs,ListSorted),
  maplist(pairFirst,Pairs,WeightsSorted).

pairFirst(Y-_,Y).
pairSecond(_-X,X).


createPairs([],[],[]).
createPairs([O|ListO],[S|ListS],[S-O|ListP]):-createPairs(ListO,ListS,ListP).

addTruckToCalculations([],_):-fail.
addTruckToCalculations([TR|LTrucks],LNewTrucks):-
    term_string(TR,TRA),
    (LNewTrucks = [TRA]; (addTruckToCalculations(LTrucks,LNT),LNewTrucks = [TRA|LNT])).


