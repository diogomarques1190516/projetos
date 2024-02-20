% CODE

:-dynamic custo_min/2.

%a remocao_pesos

% Base Conhecimento Mock

%idArmazem(<local>,<codigo>)
idArmazem('Arouca',1).
idArmazem('Espinho',2).
idArmazem('Gondomar',3).
idArmazem('Maia',4).
idArmazem('Matosinhos',5).
idArmazem('Oliveira de Azemeis',6).
idArmazem('Paredes',7).
idArmazem('Porto',8).
idArmazem('Povoa de Varzim',9).
idArmazem('Santa Maria da Feira',10).
idArmazem('Santo Tirso',11).
idArmazem('Sao Joao da Madeira',12).
idArmazem('Trofa',13).
idArmazem('Vale de Cambra',14).
idArmazem('Valongo',15).
idArmazem('Vila do Conde',16).
idArmazem('Vila Nova de Gaia',17).


%carateristicasCam(<nome_camiao>,<tara>,<capacidade_carga>,<carga_total_baterias>,<autonomia>,<t_recarr_bat_20a80>).
carateristicasCam(eTruck01,7500,4300,80,100,60).

%dadosCam_t_e_ta(<nome_camiao>,<cidade_origem>,<cidade_destino>,<tempo>,<energia>,<tempo_adicional>).
dadosCam_t_e_ta(eTruck01,1,2,122,42,0).
dadosCam_t_e_ta(eTruck01,1,3,122,46,0).
dadosCam_t_e_ta(eTruck01,1,4,151,54,25).
dadosCam_t_e_ta(eTruck01,1,5,147,52,25).
dadosCam_t_e_ta(eTruck01,1,6,74,24,0).
dadosCam_t_e_ta(eTruck01,1,7,116,35,0).
dadosCam_t_e_ta(eTruck01,1,8,141,46,0).
dadosCam_t_e_ta(eTruck01,1,9,185,74,53).
dadosCam_t_e_ta(eTruck01,1,10,97,30,0).
dadosCam_t_e_ta(eTruck01,1,11,164,64,40).
dadosCam_t_e_ta(eTruck01,1,12,76,23,0).
dadosCam_t_e_ta(eTruck01,1,13,174,66,45).
dadosCam_t_e_ta(eTruck01,1,14,59,18,0).
dadosCam_t_e_ta(eTruck01,1,15,132,51,24).
dadosCam_t_e_ta(eTruck01,1,16,181,68,45).
dadosCam_t_e_ta(eTruck01,1,17,128,45,0).

dadosCam_t_e_ta(eTruck01,2,1,116,42,0).
dadosCam_t_e_ta(eTruck01,2,3,55,22,0).
dadosCam_t_e_ta(eTruck01,2,4,74,25,0).
dadosCam_t_e_ta(eTruck01,2,5,65,22,0).
dadosCam_t_e_ta(eTruck01,2,6,69,27,0).
dadosCam_t_e_ta(eTruck01,2,7,74,38,0).
dadosCam_t_e_ta(eTruck01,2,8,61,18,0).
dadosCam_t_e_ta(eTruck01,2,9,103,44,0).
dadosCam_t_e_ta(eTruck01,2,10,36,14,0).
dadosCam_t_e_ta(eTruck01,2,11,88,41,0).
dadosCam_t_e_ta(eTruck01,2,12,61,19,0).
dadosCam_t_e_ta(eTruck01,2,13,95,42,0).
dadosCam_t_e_ta(eTruck01,2,14,78,34,0).
dadosCam_t_e_ta(eTruck01,2,15,69,30,0).
dadosCam_t_e_ta(eTruck01,2,16,99,38,0).
dadosCam_t_e_ta(eTruck01,2,17,46,14,0).

dadosCam_t_e_ta(eTruck01,3,1,120,45,0).
dadosCam_t_e_ta(eTruck01,3,2,50,22,0).
dadosCam_t_e_ta(eTruck01,3,4,46,15,0).
dadosCam_t_e_ta(eTruck01,3,5,46,14,0).
dadosCam_t_e_ta(eTruck01,3,6,74,37,0).
dadosCam_t_e_ta(eTruck01,3,7,63,23,0).
dadosCam_t_e_ta(eTruck01,3,8,38,8,0).
dadosCam_t_e_ta(eTruck01,3,9,84,36,0).
dadosCam_t_e_ta(eTruck01,3,10,59,28,0).
dadosCam_t_e_ta(eTruck01,3,11,61,27,0).
dadosCam_t_e_ta(eTruck01,3,12,67,32,0).
dadosCam_t_e_ta(eTruck01,3,13,67,29,0).
dadosCam_t_e_ta(eTruck01,3,14,82,38,0).
dadosCam_t_e_ta(eTruck01,3,15,34,8,0).
dadosCam_t_e_ta(eTruck01,3,16,80,30,0).
dadosCam_t_e_ta(eTruck01,3,17,36,10,0).

dadosCam_t_e_ta(eTruck01,4,1,149,54,25).
dadosCam_t_e_ta(eTruck01,4,2,65,24,0).
dadosCam_t_e_ta(eTruck01,4,3,46,16,0).
dadosCam_t_e_ta(eTruck01,4,5,27,10,0).
dadosCam_t_e_ta(eTruck01,4,6,103,47,0).
dadosCam_t_e_ta(eTruck01,4,7,55,27,0).
dadosCam_t_e_ta(eTruck01,4,8,36,10,0).
dadosCam_t_e_ta(eTruck01,4,9,50,26,0).
dadosCam_t_e_ta(eTruck01,4,10,78,34,0).
dadosCam_t_e_ta(eTruck01,4,11,42,19,0).
dadosCam_t_e_ta(eTruck01,4,12,97,42,0).
dadosCam_t_e_ta(eTruck01,4,13,44,11,0).
dadosCam_t_e_ta(eTruck01,4,14,111,48,0).
dadosCam_t_e_ta(eTruck01,4,15,32,13,0).
dadosCam_t_e_ta(eTruck01,4,16,53,14,0).
dadosCam_t_e_ta(eTruck01,4,17,38,11,0).

dadosCam_t_e_ta(eTruck01,5,1,141,51,24).
dadosCam_t_e_ta(eTruck01,5,2,55,20,0).
dadosCam_t_e_ta(eTruck01,5,3,48,14,0).
dadosCam_t_e_ta(eTruck01,5,4,25,9,0).
dadosCam_t_e_ta(eTruck01,5,6,97,44,0).
dadosCam_t_e_ta(eTruck01,5,7,55,28,0).
dadosCam_t_e_ta(eTruck01,5,8,29,7,0).
dadosCam_t_e_ta(eTruck01,5,9,48,24,0).
dadosCam_t_e_ta(eTruck01,5,10,69,30,0).
dadosCam_t_e_ta(eTruck01,5,11,53,26,0).
dadosCam_t_e_ta(eTruck01,5,12,95,36,0).
dadosCam_t_e_ta(eTruck01,5,13,63,20,0).
dadosCam_t_e_ta(eTruck01,5,14,105,45,0).
dadosCam_t_e_ta(eTruck01,5,15,34,14,0).
dadosCam_t_e_ta(eTruck01,5,16,46,18,0).
dadosCam_t_e_ta(eTruck01,5,17,27,7,0).

dadosCam_t_e_ta(eTruck01,6,1,69,23,0).
dadosCam_t_e_ta(eTruck01,6,2,71,27,0).
dadosCam_t_e_ta(eTruck01,6,3,74,38,0).
dadosCam_t_e_ta(eTruck01,6,4,103,46,0).
dadosCam_t_e_ta(eTruck01,6,5,99,44,0).
dadosCam_t_e_ta(eTruck01,6,7,88,48,0).
dadosCam_t_e_ta(eTruck01,6,8,92,38,0).
dadosCam_t_e_ta(eTruck01,6,9,134,66,45).
dadosCam_t_e_ta(eTruck01,6,10,42,14,0).
dadosCam_t_e_ta(eTruck01,6,11,116,56,30).
dadosCam_t_e_ta(eTruck01,6,12,23,9,0).
dadosCam_t_e_ta(eTruck01,6,13,126,58,33).
dadosCam_t_e_ta(eTruck01,6,14,25,9,0).
dadosCam_t_e_ta(eTruck01,6,15,84,44,0).
dadosCam_t_e_ta(eTruck01,6,16,132,60,35).
dadosCam_t_e_ta(eTruck01,6,17,80,38,0).

dadosCam_t_e_ta(eTruck01,7,1,116,36,0).
dadosCam_t_e_ta(eTruck01,7,2,71,38,0).
dadosCam_t_e_ta(eTruck01,7,3,61,22,0).
dadosCam_t_e_ta(eTruck01,7,4,53,26,0).
dadosCam_t_e_ta(eTruck01,7,5,53,28,0).
dadosCam_t_e_ta(eTruck01,7,6,88,48,0).
dadosCam_t_e_ta(eTruck01,7,8,59,26,0).
dadosCam_t_e_ta(eTruck01,7,9,88,48,0).
dadosCam_t_e_ta(eTruck01,7,10,84,44,0).
dadosCam_t_e_ta(eTruck01,7,11,74,22,0).
dadosCam_t_e_ta(eTruck01,7,12,82,42,0).
dadosCam_t_e_ta(eTruck01,7,13,76,31,0).
dadosCam_t_e_ta(eTruck01,7,14,97,49,21).
dadosCam_t_e_ta(eTruck01,7,15,29,16,0).
dadosCam_t_e_ta(eTruck01,7,16,84,42,0).
dadosCam_t_e_ta(eTruck01,7,17,69,30,0).

dadosCam_t_e_ta(eTruck01,8,1,134,46,0).
dadosCam_t_e_ta(eTruck01,8,2,59,18,0).
dadosCam_t_e_ta(eTruck01,8,3,32,6,0).
dadosCam_t_e_ta(eTruck01,8,4,34,10,0).
dadosCam_t_e_ta(eTruck01,8,5,32,7,0).
dadosCam_t_e_ta(eTruck01,8,6,88,38,0).
dadosCam_t_e_ta(eTruck01,8,7,57,26,0).
dadosCam_t_e_ta(eTruck01,8,9,69,30,0).
dadosCam_t_e_ta(eTruck01,8,10,65,26,0).
dadosCam_t_e_ta(eTruck01,8,11,53,22,0).
dadosCam_t_e_ta(eTruck01,8,12,82,34,0).
dadosCam_t_e_ta(eTruck01,8,13,61,24,0).
dadosCam_t_e_ta(eTruck01,8,14,97,40,0).
dadosCam_t_e_ta(eTruck01,8,15,36,12,0).
dadosCam_t_e_ta(eTruck01,8,16,65,23,0).
dadosCam_t_e_ta(eTruck01,8,17,32,6,0).

dadosCam_t_e_ta(eTruck01,9,1,181,72,50).
dadosCam_t_e_ta(eTruck01,9,2,95,41,0).
dadosCam_t_e_ta(eTruck01,9,3,86,35,0).
dadosCam_t_e_ta(eTruck01,9,4,55,24,0).
dadosCam_t_e_ta(eTruck01,9,5,48,23,0).
dadosCam_t_e_ta(eTruck01,9,6,134,65,42).
dadosCam_t_e_ta(eTruck01,9,7,95,47,0).
dadosCam_t_e_ta(eTruck01,9,8,69,28,0).
dadosCam_t_e_ta(eTruck01,9,10,109,51,24).
dadosCam_t_e_ta(eTruck01,9,11,61,29,0).
dadosCam_t_e_ta(eTruck01,9,12,132,57,31).
dadosCam_t_e_ta(eTruck01,9,13,67,19,0).
dadosCam_t_e_ta(eTruck01,9,14,143,66,45).
dadosCam_t_e_ta(eTruck01,9,15,71,34,0).
dadosCam_t_e_ta(eTruck01,9,16,15,3,0).
dadosCam_t_e_ta(eTruck01,9,17,67,28,0).

dadosCam_t_e_ta(eTruck01,10,1,97,30,0).
dadosCam_t_e_ta(eTruck01,10,2,34,14,0).
dadosCam_t_e_ta(eTruck01,10,3,59,27,0).
dadosCam_t_e_ta(eTruck01,10,4,78,33,0).
dadosCam_t_e_ta(eTruck01,10,5,71,30,0).
dadosCam_t_e_ta(eTruck01,10,6,40,14,0).
dadosCam_t_e_ta(eTruck01,10,7,82,42,0).
dadosCam_t_e_ta(eTruck01,10,8,65,24,0).
dadosCam_t_e_ta(eTruck01,10,9,109,52,25).
dadosCam_t_e_ta(eTruck01,10,11,92,46,0).
dadosCam_t_e_ta(eTruck01,10,12,32,6,0).
dadosCam_t_e_ta(eTruck01,10,13,99,46,0).
dadosCam_t_e_ta(eTruck01,10,14,63,17,0).
dadosCam_t_e_ta(eTruck01,10,15,74,34,0).
dadosCam_t_e_ta(eTruck01,10,16,105,46,0).
dadosCam_t_e_ta(eTruck01,10,17,53,23,0).

dadosCam_t_e_ta(eTruck01,11,1,164,65,42).
dadosCam_t_e_ta(eTruck01,11,2,88,41,0).
dadosCam_t_e_ta(eTruck01,11,3,65,28,0).
dadosCam_t_e_ta(eTruck01,11,4,42,18,0).
dadosCam_t_e_ta(eTruck01,11,5,55,25,0).
dadosCam_t_e_ta(eTruck01,11,6,118,57,31).
dadosCam_t_e_ta(eTruck01,11,7,74,23,0).
dadosCam_t_e_ta(eTruck01,11,8,59,23,0).
dadosCam_t_e_ta(eTruck01,11,9,63,28,0).
dadosCam_t_e_ta(eTruck01,11,10,97,46,0).
dadosCam_t_e_ta(eTruck01,11,12,111,52,25).
dadosCam_t_e_ta(eTruck01,11,13,25,7,0).
dadosCam_t_e_ta(eTruck01,11,14,126,58,33).
dadosCam_t_e_ta(eTruck01,11,15,53,25,0).
dadosCam_t_e_ta(eTruck01,11,16,59,27,0).
dadosCam_t_e_ta(eTruck01,11,17,67,27,0).

dadosCam_t_e_ta(eTruck01,12,1,76,23,0).
dadosCam_t_e_ta(eTruck01,12,2,61,19,0).
dadosCam_t_e_ta(eTruck01,12,3,67,32,0).
dadosCam_t_e_ta(eTruck01,12,4,97,41,0).
dadosCam_t_e_ta(eTruck01,12,5,92,38,0).
dadosCam_t_e_ta(eTruck01,12,6,19,8,0).
dadosCam_t_e_ta(eTruck01,12,7,82,42,0).
dadosCam_t_e_ta(eTruck01,12,8,86,33,0).
dadosCam_t_e_ta(eTruck01,12,9,128,61,37).
dadosCam_t_e_ta(eTruck01,12,10,32,6,0).
dadosCam_t_e_ta(eTruck01,12,11,109,50,23).
dadosCam_t_e_ta(eTruck01,12,13,120,53,26).
dadosCam_t_e_ta(eTruck01,12,14,40,10,0).
dadosCam_t_e_ta(eTruck01,12,15,78,38,0).
dadosCam_t_e_ta(eTruck01,12,16,126,54,28).
dadosCam_t_e_ta(eTruck01,12,17,74,32,0).

dadosCam_t_e_ta(eTruck01,13,1,174,65,42).
dadosCam_t_e_ta(eTruck01,13,2,107,35,0).
dadosCam_t_e_ta(eTruck01,13,3,74,29,0).
dadosCam_t_e_ta(eTruck01,13,4,46,11,0).
dadosCam_t_e_ta(eTruck01,13,5,67,20,0).
dadosCam_t_e_ta(eTruck01,13,6,128,57,31).
dadosCam_t_e_ta(eTruck01,13,7,80,30,0).
dadosCam_t_e_ta(eTruck01,13,8,76,20,0).
dadosCam_t_e_ta(eTruck01,13,9,67,20,0).
dadosCam_t_e_ta(eTruck01,13,10,105,47,0).
dadosCam_t_e_ta(eTruck01,13,11,27,7,0).
dadosCam_t_e_ta(eTruck01,13,12,122,52,25).
dadosCam_t_e_ta(eTruck01,13,14,137,58,33).
dadosCam_t_e_ta(eTruck01,13,15,67,17,0).
dadosCam_t_e_ta(eTruck01,13,16,59,15,0).
dadosCam_t_e_ta(eTruck01,13,17,78,22,0).

dadosCam_t_e_ta(eTruck01,14,1,59,18,0).
dadosCam_t_e_ta(eTruck01,14,2,80,35,0).
dadosCam_t_e_ta(eTruck01,14,3,80,38,0).
dadosCam_t_e_ta(eTruck01,14,4,109,46,0).
dadosCam_t_e_ta(eTruck01,14,5,105,45,0).
dadosCam_t_e_ta(eTruck01,14,6,27,9,0).
dadosCam_t_e_ta(eTruck01,14,7,97,48,0).
dadosCam_t_e_ta(eTruck01,14,8,99,38,0).
dadosCam_t_e_ta(eTruck01,14,9,143,66,45).
dadosCam_t_e_ta(eTruck01,14,10,61,17,0).
dadosCam_t_e_ta(eTruck01,14,11,122,57,31).
dadosCam_t_e_ta(eTruck01,14,12,42,10,0).
dadosCam_t_e_ta(eTruck01,14,13,132,58,35).
dadosCam_t_e_ta(eTruck01,14,15,90,44,0).
dadosCam_t_e_ta(eTruck01,14,16,139,61,37).
dadosCam_t_e_ta(eTruck01,14,17,86,38,0).

dadosCam_t_e_ta(eTruck01,15,1,132,51,24).
dadosCam_t_e_ta(eTruck01,15,2,74,30,0).
dadosCam_t_e_ta(eTruck01,15,3,34,8,0).
dadosCam_t_e_ta(eTruck01,15,4,36,12,0).
dadosCam_t_e_ta(eTruck01,15,5,36,14,0).
dadosCam_t_e_ta(eTruck01,15,6,86,44,0).
dadosCam_t_e_ta(eTruck01,15,7,34,16,0).
dadosCam_t_e_ta(eTruck01,15,8,42,13,0).
dadosCam_t_e_ta(eTruck01,15,9,71,35,0).
dadosCam_t_e_ta(eTruck01,15,10,82,36,0).
dadosCam_t_e_ta(eTruck01,15,11,53,25,0).
dadosCam_t_e_ta(eTruck01,15,12,80,38,0).
dadosCam_t_e_ta(eTruck01,15,13,69,18,0).
dadosCam_t_e_ta(eTruck01,15,14,95,45,0).
dadosCam_t_e_ta(eTruck01,15,16,69,29,0).
dadosCam_t_e_ta(eTruck01,15,17,53,17,0).

dadosCam_t_e_ta(eTruck01,16,1,179,68,45).
dadosCam_t_e_ta(eTruck01,16,2,92,37,0).
dadosCam_t_e_ta(eTruck01,16,3,84,31,0).
dadosCam_t_e_ta(eTruck01,16,4,57,16,0).
dadosCam_t_e_ta(eTruck01,16,5,46,18,0).
dadosCam_t_e_ta(eTruck01,16,6,132,60,35).
dadosCam_t_e_ta(eTruck01,16,7,92,42,0).
dadosCam_t_e_ta(eTruck01,16,8,67,23,0).
dadosCam_t_e_ta(eTruck01,16,9,15,3,0).
dadosCam_t_e_ta(eTruck01,16,10,105,46,0).
dadosCam_t_e_ta(eTruck01,16,11,57,28,0).
dadosCam_t_e_ta(eTruck01,16,12,130,52,25).
dadosCam_t_e_ta(eTruck01,16,13,61,15,0).
dadosCam_t_e_ta(eTruck01,16,14,141,61,37).
dadosCam_t_e_ta(eTruck01,16,15,69,29,0).
dadosCam_t_e_ta(eTruck01,16,17,65,24,0).

dadosCam_t_e_ta(eTruck01,17,1,128,46,0).
dadosCam_t_e_ta(eTruck01,17,2,42,14,0).
dadosCam_t_e_ta(eTruck01,17,3,40,11,0).
dadosCam_t_e_ta(eTruck01,17,4,42,13,0).
dadosCam_t_e_ta(eTruck01,17,5,34,10,0).
dadosCam_t_e_ta(eTruck01,17,6,82,38,0).
dadosCam_t_e_ta(eTruck01,17,7,74,30,0).
dadosCam_t_e_ta(eTruck01,17,8,29,6,0).
dadosCam_t_e_ta(eTruck01,17,9,69,31,0).
dadosCam_t_e_ta(eTruck01,17,10,55,24,0).
dadosCam_t_e_ta(eTruck01,17,11,69,29,0).
dadosCam_t_e_ta(eTruck01,17,12,80,30,0).
dadosCam_t_e_ta(eTruck01,17,13,82,23,0).
dadosCam_t_e_ta(eTruck01,17,14,90,38,0).
dadosCam_t_e_ta(eTruck01,17,15,53,18,0).
dadosCam_t_e_ta(eTruck01,17,16,67,25,0).

origin(5).

%delivery(<idEntrega>,<data>,<massaEntrega>,<armazemEntrega>,<tempoColoc>,<tempoRet>)
%First set of deliveries
delivery(4439, 20221205, 200, 1, 8, 10).
delivery(4438, 20221205, 150, 9, 7, 9).
delivery(4445, 20221205, 100, 3, 5, 7).
delivery(4443, 20221205, 120, 8, 6, 8).
delivery(4449, 20221205, 300, 11, 15, 20).
delivery(4450, 20221205, 310, 17, 16, 20).
delivery(4451, 20221205, 270, 14, 14, 18).
delivery(4452, 20221205, 180, 12, 9, 11).
delivery(4453, 20221205, 220, 6, 9, 12).
delivery(4454, 20221205, 390, 13, 21, 26).
delivery(4455, 20221205, 380, 2, 20, 25).
%delivery(4456, 20221205, 280, 7, 14, 19).
%delivery(4457, 20221205, 260, 15, 13, 18).
%delivery(4458, 20221205, 350, 10, 18, 22).
%delivery(4459, 20221205, 260, 4, 14, 17).
%delivery(4460, 20221205, 330, 16, 17, 21).


% remocao_pesos([1,9,3,8,11],L,S).
% L = [870, 670, 520, 420, 300],
% S = 870.

remocao_pesos([],[],0).								% No backtracking, adiciona o peso cumulativo das deliverys
remocao_pesos([Armazem|LC],[PesoAc|LP],PesoAc):-
    remocao_pesos(LC,LP,PesoAc1),delivery(_,_,Peso,Armazem,_,_),PesoAc is Peso+PesoAc1.

%b acrescenta_tara
% acrescenta_tara(6,[9.0, 8.5, 6.7, 5.7, 3.2, 2],LPesosTara).
% Adiciona a tara a cada um dos pesos, e adiciona o valor da tara no final da lista

acrescenta_tara(Tara,[],[Tara]).
acrescenta_tara(Tara,[Peso|LP],[PesoTara|LPT]):-
    acrescenta_tara(Tara,LP,LPT),
    PesoTara is Peso+Tara.

% c calcula_custo
% LC -> Lista Cidades
% LP -> Lista de Pesos
% LPT -> Lista de Pesos total
 


calcula_custo(Camiao,LC,Custo):-
    remocao_pesos(LC,LP,_),							% Vai buscar lista com a soma cumulativa dos pesos
    carateristicasCam(Camiao,Tara,_,Autonomia,_,_),	% Vai buscar a tara do camião
    acrescenta_tara(Tara,LP,LPT),					% Acrescenta a tara do camião
    idArmazem('Matosinhos',Cin),					% Vai buscar id do armazém de partida/ destino (Matosinhos)
    append([Cin|LC],[Cin],LCcompleto),				% Adiciona o armazém principal ao início e final da lista
    %write("Caminho"),nl,print_list(LCcompleto),nl,
    %write("Pesos"),nl,print_list(LPT),nl,
    %custo(Camiao,LCcompleto,LPT,Custo).					% Calcula o custo para esse percurso
    custo(Camiao,LCcompleto,LPT,Autonomia,Custo).


print_list([]).
print_list([X]):-write(X).
print_list([X|L]):-write(X),write(", "),print_list(L),!.

%pegar numa lista e buscar o mais pequeno
minorante([A],A):-!.
minorante([A|[B|L]],M):-M1 is min(A,B), minorante([M1|L],M).

%pegar numa lista e buscar o maior
majorante([A],A):-!.
majorante([A|[B|L]],M):-M1 is max(A,B), majorante([M1|L],M).



% calcula peso total de tudo com um percuso e uma autonomia associado
custo(_,[_],[],_,0).
custo(Camiao,[C1,C2|LC],[PT|LPT],Autonomia,Custo):-
    dadosCam_t_e_ta(Camiao,C1,C2,Temp,Energ,TempoAdicional),       % Vai buscar o tempo de deslocamento entre os dois armazéns (só numa direção pois sao diferentes),
    carateristicasCam(Camiao,Tara,CapacidadeCarga,CapacidadeBateria,_,TRecarr),  % Vai buscar a Autonomia da 
    CargaTotal is Tara + CapacidadeCarga,               % Carga Total do camião
    Tempo is Temp * PT / CargaTotal,                    % Tempo do trajeto até C2
    Energia is Energ * PT / CargaTotal,                 % Energia do trajeto até C2
    Battery80 is 0.8 * CapacidadeBateria,               % Bateria nos 80%
    Battery20 is 0.2 * CapacidadeBateria,               % Bateria nos 20%
    AutonomiaChegada is Autonomia - Energia,            % Bateria na chegada a C2 (sem carregamentos)
    % Tempo de carregamento rápido para a bateria necessária
    TempoCarrRapido is (Battery80 - Autonomia) * TRecarr / (Battery80 - Battery20),
    (delivery(_,_,_,C1,_,_),!,delivery(_,_,_,C1,_,TempoRet) % Valor do tempo de retirada da carga
        ; TempoRet is 0),
    % Maior dos tempos entre tempo de descarregamento da carga e tempo do recarregamento da bateria
    (TempoRet > TempoCarrRapido,!, MTParagem is TempoRet; MTParagem is TempoCarrRapido),
    % Necessário carregamento em C1 até 80% e intermédio
    ((AutonomiaChegada < Battery20 , Battery80 - Energia < Battery20,!,BateriaRestante is Battery20, TParagem is MTParagem, TAdicional is TempoAdicional) ; 
        % Necessário apenas carregamento em C1
        (Autonomia - Energia < Battery20,!,BateriaRestante is Battery80, TParagem is MTParagem, TAdicional is 0) ; 
        % Carregamento não necessário
        BateriaRestante is AutonomiaChegada, TParagem is TempoRet, TAdicional is 0 ),
    custo(Camiao, [C2|LC],LPT,BateriaRestante, Custo1),
    Custo is Custo1 + Tempo + TParagem + TAdicional.


temposAPercurso(Camiao,A,[B],[T]):-tempoAparaB(Camiao,A,B,T).
temposAPercurso(Camiao,A,[B|L1],[T|L2]):-tempoAparaB(Camiao,A,B,T),temposAPercurso(Camiao,A,L1,L2).
tempoAparaB(Camiao,A,B,T):-dadosCam_t_e_ta(Camiao,A,B,T,_,_),member(T,_).

%ids de entregas para Peso e distancia
idsPD([],[],[]).
idsPD([A],[B],[C]):-idPD(A,B,C).
idsPD([A|L1],[B|L2],[C|L3]):-idPD(A,B,C),idsPD(L1,L2,L3).
idPD(A,B,C):-delivery(A, _, B, _, _, C),member(A, _),member(B, _),member(C, _).

%Remover um item de uma lista e retornar
remover( _, [], []).
remover( R, [R|T], T2) :- remover( R, T, T2).
remover( R, [H|T], [H|T2]) :- H \= R, remover( R, T, T2).

%vai pegar nos pontos que tem de passar, vai por por ordem o mais rápido, D-> vai sumar o tempo total
%L3 -> é a lista dos tempos de A Para cada um dos armazéns de B|L1
%A-> ponto inical 
%B|L1 ->pontos que tem de passar
%C|L2 -> retorna pontos ordenados de uma rota 

custosminimo(Camiao,A,[B],[B],C):-tempoAparaB(Camiao,A,B,C).
custosminimo(Camiao,A,[B|L1],[C|L2],D):-temposAPercurso(Camiao,A,[B|L1],L3),minorante(L3,C1),member(C,[B|L1]),remover(C,[B|L1],LN),tempoAparaB(Camiao,A,C,C1),custosminimo(Camiao,C,LN,L2,D1),D is D1+C1.

%vai pegar nos pontos que tem de passar, vai por por ordem o mais lento, D-> vai sumar o tempo total
%L3 -> é a lista dos tempos de A Para cada um dos armazéns de B|L1
%A-> ponto inical 
%B|L1 ->pontos que tem de passar
%C|L2 -> retorna pontos ordenados de uma rota 

custosmaximo(Camiao,A,[B],[B],C):-tempoAparaB(Camiao,A,B,C).
custosmaximo(Camiao,A,[B|L1],[C|L2],D):-temposAPercurso(Camiao,A,[B|L1],L3),majorante(L3,C1),member(C,[B|L1]),remover(C,[B|L1],LN),tempoAparaB(Camiao,A,C,C1),custosmaximo(Camiao,C,LN,L2,D1),D is D1+C1.

%PT -> Ponto inicial
%PTS -> pontos que tem de passar 
%IDs -> ids das entregas 
%A|rota -> retorna rota
%B|Pesos -> retorna peso a entregar em cada ponto

rotasmin(_,_,[A],IDS,[A],[B]):-idsptp(IDS,A,B).
rotasmin(Camiao,PT,PTS,IDS,[A|ROTA],[B|PESOS]):-custosminimo(Camiao,PT,PTS,[A|ROTA],_),remover(A,PTS,PTS1),idsptp(IDS,A,B),rotasmin(Camiao,A,PTS1,IDS,ROTA,PESOS).

%PT -> Ponto inicial
%PTS -> pontos que tem de passar 
%IDs -> ids das entregas 
%A|rota -> retorna rota
%B|Pesos -> retorna peso a entregar em cada ponto

rotasmax(_,_,[A],IDS,[A],[B]):-idsptp(IDS,A,B).
rotasmax(Camiao,PT,PTS,IDS,[A|ROTA],[B|PESOS]):-custosmaximo(Camiao,PT,PTS,[A|ROTA],_),remover(A,PTS,PTS1),idsptp(IDS,A,B),rotasmax(Camiao,A,PTS1,IDS,ROTA,PESOS).

%C tara
%A|L1 lista de pesos a ser entregue a cada ponto
%B|L2 retorna peso totais a cada ponto 

lplpc(C,[A],[B,C]):-B is A+C.
lplpc(C,[A|L1],[B|L2]):-sumlist([A|L1],D),B is C+D,lplpc(C,L1,L2).

%retorna o custo 
%Camiao
%C1 ponto inicial
%C2|LC lista de pontos que tem que passar 
%IDs ids de entregas a entregar
%CUSTO custo

minrota(Camiao,C1,[C2|LC],IDS,Custo):-rotasmin(Camiao,C1,[C2|LC],IDS,ROTA,PESOS),carateristicasCam(Camiao,Tara,_,_,Autonomia,_),lplpc(Tara,PESOS,LPTS),append([C1],ROTA,ROTA1),append(ROTA1,[C1],ROTA2),custo(Camiao,ROTA2,LPTS,Autonomia,Custo).
maxrota(Camiao,C1,[C2|LC],IDS,Custo):-rotasmax(Camiao,C1,[C2|LC],IDS,ROTA,PESOS),carateristicasCam(Camiao,Tara,_,_,Autonomia,_),lplpc(Tara,PESOS,LPTS),append([C1],ROTA,ROTA1),append(ROTA1,[C1],ROTA2),custo(Camiao,ROTA2,LPTS,Autonomia,Custo).

%Camiao
%C1 ponto inicial
%C2|LC lista de pontos que tem que passar 
%IDs ids de entregas a entregar
%min retornar minorante 
%max retornar majorante

minemax(Camiao,C1,[C2|LC],IDS,Min,Max):-minrota(Camiao,C1,[C2|LC],IDS,Min),maxrota(Camiao,C1,[C2|LC],IDS,Max).

%Camiao
%C1 ponto inicial
%Data data
%IDs ids de entregas a entregar
%min retornar minorante 
%max retornar majorante

cmdaaz(Camiao,C1,Data,Min,Max):-listfill(Data,Amzs,IDs),minemax(Camiao,C1,Amzs,IDs,Min,Max).


minorantemajorante(Camiao,Data,Min,Max):-origin(PI),cmdaaz(Camiao,PI,Data,Min,Max).

%Data data 
%Amzs retorna armazem 
%IDs retorna ids das entregas   
listfill(Data,Amzs,IDs):- findall(Amz, delivery(ID, Data, X1, Amz, X2, X3), Amzs),findall(ID, delivery(ID, Data, X1, Amz, X2, X3), IDs).

%vai buscar um ponto e o peso que tem de entregar nesse ponto
idsptp([ID|IDS],A,P):-idspt([ID|IDS],A,L),idsPD(L,P1,_),sumlist(P1,P).

%vai pegar nos ids e pegar no ponto e vai retornar a lista de entregas que tem que entregar nesse ponto
idspt([ID],A,LN):-idpt(ID,A,LN).
idspt([ID|IDS],A,LN):-idpt(ID,A,L),append(L,LN1,LN),idspt(IDS,A,LN1).

%Vai pegar num só id e vai pegar num ponto e vai retornar uma lista com o id lá dentro, de tamanho 1 é se tiver, 0 se nao tiver
idpt(ID,A,LN):-(delivery(ID,_,_,A,_,_),!,(member(ID,LN),length(LN,1)));length(LN,0).



