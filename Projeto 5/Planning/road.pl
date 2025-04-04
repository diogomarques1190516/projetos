%sumOfWeight(LOfCities,LOfWeights,TotalWeight)

sumOfWeight([],[],0).
sumOfWeight([City|LC],[WeightAc|LW],WeightAc):-
    sumOfWeight(LC,LW,WeightAc1),loadWeight(City,Weight),WeightAc is Weight+WeightAc1.

%addTruckWeight(TruckWeight,LOfWeights,LOfTruckWeights)
addTruckWeight(TruckW,[],[TruckW]).
addTruckWeight(TruckW,[Weight|LW],[TotalTW|LTW]):-addTruckWeight(TruckW,LW,LTW), TotalTW is Weight+TruckW.


%add checking if it is not over the load possibilities


calculateTimes(PL,LC,TotalTime):-
    sumOfWeight(LC,LW,_),
    truckWeight(PL,TruckW),
    addTruckWeight(TruckW,LW,LTW),
    mainWarehouse(MainCW),
    append([MainCW|LC],[MainCW],TotalLC),
    totalBatteries(PL,Batteries),
    calculateTimesInternal(PL,TotalLC,LTW,_,TotalWayTime),
    calcEnergy(PL,TotalLC,LTW,Batteries,TChargingTime),
    %nl,nl,
    %write("Total pickup and charging time: "),write(TChargingTime),nl,
    %write("Total road trips time: "),write(TotalWayTime),nl,nl,
    TotalTime is TChargingTime+TotalWayTime.
    %write("Total time: "),write(TotalTime),nl,nl.





calculateTimesInternal(_,[_],_,[],0).
calculateTimesInternal(PL,[C1,C2|LC],[TW|LTW],[Time|LTimes],TotalTime):-
    calculateTimesInternal(PL,[C2|LC],LTW,LTimes,TotalTime1),
    % change to dataTruck_t_e_ta here
    timeWarehouses(C1,C2,FullWeightTime),
    totalTruckWeight(PL,TTW),
    Multiplier is TW/ TTW,
    Time is FullWeightTime*Multiplier,
    TotalTime is TotalTime1+Time.


calcEnergy(PL,LC,LTW,TotalBatteries,TimeSum):-
    calculateEnergyInternal(PL,LC,LTW,TotalBatteries,TotalBatteries,TimeSum).

calculateEnergyInternal(_,[_],_,_,_,0).
calculateEnergyInternal(PL,[C1,C2|LC],[TW|LTW],PreviousE,TotalBatteries,TimeSum):-
    totalTruckWeight(PL,TTW),
    Multiplier is TW/TTW,
    %nl,write("Multiplication: "),write(Multiplier),nl,
    limits(TotalBatteries,LimitBottom,LimitTop),
    energyW(C1,C2,FullWeightEnergy),
    EnergyConsumption is FullWeightEnergy*Multiplier,
    NecessaryE is LimitBottom + EnergyConsumption,
    addTime(C1,C2,AdditionalT),
    %write("Additional time is "),write(AdditionalT),nl,

    levelToCharge(LC,LimitTop,NecessaryE,LoadingLevel),
    (pickupT(C1,PickupT);PickupT is 0),
    ((PreviousE<NecessaryE,!,calculateChargeTime(PL,PreviousE,LoadingLevel,LimitTop,LimitBottom,ChargeT,NewE),(
  (AdditionalT>0,!,AfterE is LimitBottom)
    ;AfterE is NewE-EnergyConsumption))
  ;(AfterE is  PreviousE-EnergyConsumption,ChargeT is 0)),
    ((ChargeT<PickupT,!,CPT is PickupT);(CPT is ChargeT)),
    %write("ChargePickupTime is "),write(CPT),nl,
    calculateEnergyInternal(PL,[C2|LC],LTW,AfterE,TotalBatteries,TimeSum1),
    TimeSum is TimeSum1+CPT+AdditionalT.


levelToCharge([],_,NecessaryE,NecessaryE).
levelToCharge(_,LimitTop,_,LimitTop).

calculateChargeTime(PL,PreviousE,LoadingLevel,LimitTop,LimitBottom,ChargeT,NewE):-
    ((PreviousE>=LoadingLevel,!,NewE is PreviousE,ChargeT is 0);(
         timeToRechargeBatteries(PL,RechargeT),
         NewE is LoadingLevel,
         ChargeT is (LoadingLevel-PreviousE)*RechargeT /(LimitTop-LimitBottom)
     )).


lowestTimeSequence(PL,LC,LCBest,Time,Tsol):-
	get_time(Ti),
	(runLCS(PL,LC);true),
	get_time(Tf),
	Tsol is Tf-Ti,
	lowestTime(LCBest,Time).

runLCS(PL,LC):- retractall(lowestTime(_,_)), assertz(lowestTime(_,10000000)),
    permutation(LC,LCPerm),
    calculateTimes(PL,LCPerm,Time),
    updateLowest(LCPerm,Time),
    fail.



updateLowest(LCPerm,Time):-
    lowestTime(_,TimeMin),
    ((Time<TimeMin,!,retract(lowestTime(_,_)),assertz(lowestTime(LCPerm,Time)));true).


writelist([]).
writelist([H|T]) :- write(H),nl,writelist(T).
