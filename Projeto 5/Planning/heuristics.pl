:- use_module(library(lists)).

%Heuristic 1: Take the shortest time

lowestTimeSequenceH1(T,LC,LCFinal,Time,Tsol):-
	get_time(Ti),
	%	setof(City, loadCities(City),LC),
	calculateTimesH1(T,LC, Time, LCFinal),
	get_time(Tf),
	Tsol is Tf-Ti.

calculateTimesH1(T,LC,TotalTime,LCFinal):-
    sumOfWeight(LC,LW,_),
    truckWeight(T,TruckW),
    addTruckWeight(TruckW,LW,LTW),
    mainWarehouse(MainCW),
	orderPathsH1(MainCW,LC,LCFinal),
	append([MainCW|LCFinal],[MainCW],TotalLC),
    totalBatteries(T,Batteries),
    calculateTimesInternal(T,TotalLC,LTW,_,TotalWayTime),
    calcEnergy(T,TotalLC,LTW,Batteries,TChargingTime),
    TotalTime is TChargingTime+TotalWayTime.

orderPathsH1(_, [], []).
orderPathsH1(WInicial,LC,[C|LCFinal]):-
	findall((C2,T2),(member(C2,LC),timeWarehouses(WInicial,C2,T2)),TimeList),
	smallestTimeHeuristic(TimeList, C, _),
	remover(C, LC, NewLC),
	orderPathsH1(C, NewLC, LCFinal).


smallestTimeHeuristic([(C,T)|[]],C,T).
smallestTimeHeuristic([(C1,T1)|L], C, T):-
	smallestTimeHeuristic(L, C2, T2),
	( T1 < T2 -> C = C1, T is T1; C = C2, T is T2).


%Heuristic 2: Take the one where more mass is delivered

lowestTimeSequenceH2(LCFinal,Time,Tsol):-
	get_time(Ti),
	setof(City, loadCities(City),LC),
	calculateTimesH2(LC, Time, LCFinal),
	get_time(Tf),
	Tsol is Tf-Ti.

calculateTimesH2(T,LC,TotalTime,LCFinal):-
    sumOfWeight(LC,LW,_),
    truckWeight(T,TruckW),
    addTruckWeight(TruckW,LW,LTW),
    mainWarehouse(MainCW),
	orderPathsH2(LC,LCFinal),
	append([MainCW|LCFinal],[MainCW],TotalLC),
    totalBatteries(T,Batteries),
    calculateTimesInternal(T,TotalLC,LTW,_,TotalWayTime),
    calcEnergy(T,TotalLC,LTW,Batteries,TChargingTime),
    TotalTime is TChargingTime+TotalWayTime.

orderPathsH2([], []).
orderPathsH2(LC,[C|LCFinal]):-
	findall((C2,T2),(member(C2,LC),loadWeight(C2,T2)),MassList),
	biggestMassHeuristic(MassList, C, _),
	remover(C, LC, NewLC),
	orderPathsH2(NewLC, LCFinal).

biggestMassHeuristic([(C,M)|[]],C,M).
biggestMassHeuristic([(C1,M1)|L], C, M):-
	biggestMassHeuristic(L, C2, M2),
	(M1 > M2 -> C = C1, M is M1; C = C2, M is M2).


%Heuristic 3: Combination of H1 and H2 we take the smallest Time / Mass

lowestTimeSequenceH3(LCFinal,Time,Tsol):-
	get_time(Ti),
	setof(City, loadCities(City),LC),
	calculateTimesH3(LC, Time, LCFinal),
	get_time(Tf),
	Tsol is Tf-Ti.

calculateTimesH3(T,LC,TotalTime,LCFinal):-
    sumOfWeight(LC,LW,_),
    truckWeight(T,TruckW),
    addTruckWeight(TruckW,LW,LTW),
    mainWarehouse(MainCW),
	orderPathsH3(MainCW,LC,LCFinal),
	append([MainCW|LCFinal],[MainCW],TotalLC),
    totalBatteries(T,Batteries),
    calculateTimesInternal(T,TotalLC,LTW,_,TotalWayTime),
    calcEnergy(T,TotalLC,LTW,Batteries,TChargingTime),
    TotalTime is TChargingTime+TotalWayTime.

orderPathsH3(_, [], []).
orderPathsH3(WInicial,LC,[C|LCFinal]):-
	findall((C2,TM),(member(C2,LC),timeWarehouses(WInicial,C2,T),loadWeight(C2,W), TM is (T / W)),TimeList),
	smallestCombinedHeuristic(TimeList, C, _),
	remover(C, LC, NewLC),
	orderPathsH3(C, NewLC, LCFinal).

smallestCombinedHeuristic([(C,TM)|[]],C,TM).
smallestCombinedHeuristic([(C1,TM1)|L], C, TM):-
	smallestCombinedHeuristic(L, C2, TM2),
	( TM1 < TM2 -> C = C1, TM is TM1; C = C2, TM is TM2).

%Other functions

remover( _, [], []).
remover( R, [R|T], T).
remover( R, [H|T], [H|T2]) :- H \= R, remover( R, T, T2).
