
%change these value to depend on the truck i
truckWeight(PL,TW):-featuresTruck(PL,TW,_,_,_,_).
capacityWeight(PL,CW):-featuresTruck(PL,_,CW,_,_,_).

totalTruckWeight(PL,TTW):-truckWeight(PL,TW),capacityWeight(PL,CW),TTW is TW+CW.

totalBatteries(PL,TB):- featuresTruck(PL,_,_,TB,_,_).
timeToRechargeBatteries(PL,TR):-featuresTruck(PL,_,_,_,_,TR).



limits(FC,LB,LT):-LB is 1/5*FC, LT is 4/5*FC.

timeWarehouses(C1,C2,T):-dataTruck_t_e_ta(_,C1,C2,T,_,_).

addTime(C1,C2,AT):-dataTruck_t_e_ta(_,C1,C2,_,_,AT).

energyW(C1,C2,EW):-dataTruck_t_e_ta(_,C1,C2,_,EW,_).


%change it to sum all the deliveries to that warehouse
loadWeight(WarehouseID,Weight):-findall(W, delivery(_,_,W,WarehouseID,_,_),DeliveriesList), sum_list(DeliveriesList, Weight).

loadCities(WarehouseID):-delivery(_,_,_,WarehouseID,_,_).

pickupT(C,PT):-delivery(_,_,_,C,_,PT).

