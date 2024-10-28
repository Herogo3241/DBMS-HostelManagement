"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HostigoAnimation = () => {
  const letterPaths = [
    "M 221.5,470.4664 C 155.88592,461.87959 100.16219,426.62697 62.424024,369.82985 49.863001,350.92511 36.546767,318.74889 32.076232,296.5 28.005798,276.24234 26.989105,238.9801 29.961659,219 c 0.508586,-3.41848 0.626356,1.12302 0.311182,12 -1.6038,55.34877 12.645534,100.81555 44.449343,141.82897 8.440834,10.8851 15.183001,18.18988 16.736024,18.13261 0.572986,-0.0211 3.222587,-1.96062 5.888003,-4.30997 l 4.846209,-4.27155 -5.714008,-5.94003 C 83.611116,363.06376 69.253533,341.52167 61.089859,323.34312 48.311274,294.88826 43.095994,266.62531 44.490172,233.38514 l 0.675898,-16.11485 -5.688284,-5.38515 c -3.128557,-2.96182 -6.186506,-5.69577 -6.795444,-6.07543 -3.369572,-2.10087 7.878427,-35.65002 19.217665,-57.32009 9.522029,-18.19727 16.628745,-28.35015 32.274371,-46.10821 C 107.28112,76.154858 135.5384,56.316422 168,43.530398 209.50815,27.181107 256.59318,23.569929 298.63992,33.510993 c 42.03107,9.93736 77.09504,29.277382 106.9259,58.976482 33.56681,33.418555 53.70922,71.289855 62.78433,118.045705 1.38424,7.13175 2.79684,15.80369 3.13911,19.27097 0.58769,5.95345 0.4157,6.67664 -3.0917,13 -2.0427,3.68272 -4.93701,8.49585 -6.43179,10.69585 -2.09751,3.0871 -3.10766,6.51047 -4.42612,15 -7.01421,45.16451 -21.24645,75.63206 -49.32339,105.58868 l -7.11252,7.58869 4.96823,4.89352 c 4.10756,4.04579 5.26791,4.70635 6.69813,3.81308 3.08182,-1.92482 21.14948,-23.45322 26.67396,-31.78319 6.88849,-10.38666 14.41247,-24.2904 18.53865,-34.25803 3.72008,-8.98659 4.55842,-10.27608 3.51313,-5.40373 -1.65508,7.7148 -12.20059,30.28721 -21.28543,45.56098 -6.68793,11.244 -20.54504,28.97834 -31.13827,39.8508 -36.09644,37.04788 -79.13972,58.73795 -131.26859,66.14794 -12.68705,1.80343 -42.40637,1.78636 -56.30355,-0.0323 z M 284,458.58034 c 28.77621,-4.45412 50.86376,-11.93417 75,-25.39907 11.85636,-6.61432 29.03267,-17.90837 28.9574,-19.04056 C 387.90308,413.32352 378.43596,406 377.43389,406 c -0.41323,0 -4.84241,2.64492 -9.84261,5.8776 -17.44376,11.27754 -38.31628,20.80473 -57.19119,26.10471 -47.67533,13.38699 -99.44958,9.73173 -143.85763,-10.15636 -15.61817,-6.99457 -35.7926,-19.44944 -49.38413,-30.48774 -2.93792,-2.38601 -5.86292,-4.32034 -6.5,-4.2985 -0.63708,0.0218 -3.28002,1.9931 -5.87319,4.38059 l -4.71486,4.34089 5.71486,4.88017 c 22.9987,19.6396 45.65256,32.41538 75.11668,42.36251 19.65334,6.635 36.56749,9.79051 58.09818,10.83882 13.65003,0.66461 36.73436,0.017 45,-1.26235 z M 270.2472,425.6485 c 0.41096,-0.63168 0.69939,-20.69366 0.64096,-44.58218 -0.10087,-41.23894 -0.0123,-43.50399 1.7528,-44.82501 5.16219,-3.86342 20.50588,-12.42784 21.13626,-11.79766 0.39753,0.3974 0.72278,22.08895 0.72278,48.20345 v 47.48091 l 3.38928,-0.63545 c 1.8641,-0.34949 5.0141,-1.16774 7,-1.81832 l 3.61072,-1.18287 0.5,-132.69559 0.5,-132.69559 13,8.06577 c 17.58151,10.90834 35.51615,20.21789 36.68929,19.04475 0.51243,-0.51243 0.79197,-3.13154 0.6212,-5.82025 L 359.5,167.5019 352,163.41476 c -19.89905,-10.84403 -41.3276,-23.54404 -42.2589,-25.04548 -0.78544,-1.26629 -12.97449,-7.34967 -34.93683,-17.43647 -6.98265,-3.20698 -17.12151,-8.0224 -22.53081,-10.70094 l -9.83508,-4.87007 -34.46919,25.88316 C 189.01114,145.48069 171.1375,158.55442 168.25,160.29769 l -5.25,3.16957 v 6.23119 c 0,5.44488 -0.28393,6.38042 -2.25,7.41386 -1.2375,0.65048 -11.1375,6.58444 -22,13.18658 L 119,202.30279 v 88.1261 c 0,78.14253 0.17635,88.37788 1.5567,90.3486 0.85619,1.22238 2.20619,2.22251 3,2.22251 1.24692,0 1.4433,-12.11045 1.4433,-89.00656 v -89.00655 l 6.75,-4.30241 c 14.05912,-8.9612 29.3982,-17.86961 29.90184,-17.36597 0.28792,0.28792 0.76518,3.18886 1.06057,6.44653 0.39231,4.32644 0.16651,6.23911 -0.83766,7.09558 -0.75611,0.64489 -8.00885,5.77757 -16.1172,11.40596 -13.52895,9.39107 -16.61041,12.48676 -14.00755,14.07223 0.4125,0.25127 7.05,-3.76843 14.75,-8.93266 7.7,-5.16423 14.45,-9.39349 15,-9.39835 1.21729,-0.0108 1.04089,30.2825 -0.17923,30.77905 -0.45143,0.18371 -5.99577,3.37759 -12.32077,7.0975 l -11.5,6.76348 -0.25657,72.1451 -0.25656,72.14509 5.25656,3.54484 5.25657,3.54484 0.74383,-10.76385 C 148.65294,383.34373 148.71496,362.975 148.38166,344 l -0.606,-34.5 6.67441,-4.25 c 3.67093,-2.3375 7.10761,-4.25 7.63708,-4.25 0.60622,0 0.91925,19.53237 0.8454,52.75 l -0.11727,52.75 5.82773,3.17818 c 3.45463,1.884 6.07852,2.7724 6.44361,2.18167 0.54806,-0.88679 0.9363,-88.73787 0.91931,-208.02217 L 176,162.17537 l 10.75,-7.81478 c 5.9125,-4.29812 20.53603,-15.13758 32.49674,-24.08768 C 231.20745,121.32281 241.50268,114 242.12502,114 c 0.62234,0 3.64956,1.4625 6.72715,3.25 3.0776,1.7875 14.60737,7.975 25.62173,13.75 l 20.0261,10.5 0.28374,10.74084 0.28374,10.74084 -5.78374,3.65422 c -8.47495,5.35456 -32.00003,21.99896 -52.15321,36.89929 -9.69679,7.16936 -26.51803,19.23479 -37.38053,26.81207 -14.13316,9.85876 -19.75,14.32801 -19.75,15.7148 0,1.06587 0.29796,1.93794 0.66214,1.93794 1.331,0 9.94441,-5.49113 41.06494,-26.17933 17.4751,-11.61704 40.81038,-27.12911 51.85616,-34.47128 C 284.62902,180.00723 293.96956,174 294.33999,174 c 0.37043,0 0.55798,31.60448 0.41676,70.23217 l -0.25675,70.23217 -7.65812,5.01783 C 282.62991,322.24198 274.42913,327.2 268.61792,330.5 l -10.56583,6 -0.026,45.86522 -0.026,45.86523 5.75,-0.71673 c 3.1625,-0.3942 6.08624,-1.23355 6.4972,-1.86522 z M 148.62032,300.28699 C 148.27915,299.94581 148,288.49449 148,274.83961 v -24.82707 l 4.25,-3.1138 c 4.95928,-3.63347 8.53963,-5.44244 9.28887,-4.69321 0.90443,0.90444 1.65704,50.22761 0.78453,51.41549 -1.22306,1.66514 -12.98313,7.38592 -13.70308,6.66597 z M 204,390.06692 v -31.93309 l 8.75,-4.48402 c 7.14017,-3.65905 33.70022,-18.18372 39.12546,-21.3962 0.99412,-0.58866 -0.25349,-1.809 -4.5,-4.40168 -10.49611,-6.40833 -10.09113,-6.30597 -14.20755,-3.59101 -4.43498,2.92506 -20.05516,11.98773 -29.66791,17.21303 -11.308,6.14679 -10.24952,1.64731 -9.83195,41.79456 0.20154,19.37732 0.55616,35.75909 0.78804,36.40393 0.41831,1.16326 2.96911,1.92962 7.29391,2.19138 L 204,422 Z m 151.5,8.15592 5,-2.73043 0.25914,-51.36045 c 0.24364,-48.2872 0.36331,-51.32775 2,-50.81418 0.95747,0.30045 4.23299,1.57711 7.27892,2.83702 l 5.53807,2.29076 -0.41098,42.77722 c -0.43472,45.24832 -0.44432,45.14981 4.00611,41.12223 1.74915,-1.58296 1.82941,-6.18524 1.84405,-105.75 0.008,-57.39924 0.40618,-104.71209 0.88665,-105.47061 0.76076,-1.20105 1.06675,3.46772 1.36817,20.8756 0.0238,1.375 -0.0505,3.85 -0.16515,5.5 -0.11464,1.65 0.0606,8.85 0.38937,16 0.32879,7.15 0.68956,29.9874 0.80172,50.74978 0.1771,32.78252 0.40131,37.75382 1.70393,37.78041 1.33333,0.0272 1.33333,0.12818 0,0.90856 -1.248,0.73044 -1.39332,2.61533 -0.86502,11.21959 0.34924,5.68791 0.98337,12.7798 1.4092,15.75974 0.69877,4.89012 0.60617,5.35359 -0.95037,4.75629 -1.41178,-0.54175 -1.60628,-0.25482 -1.0723,1.58192 1.01084,3.47707 6.47849,7.5709 6.47849,4.8507 0,-0.49116 -0.73941,-1.17675 -1.64313,-1.52354 -0.90372,-0.34679 -1.36459,-0.90906 -1.02416,-1.24949 C 389.28518,337.38148 392,340.03601 392,341.91981 392,343.53178 404.10191,354 405.96545,354 c 0.50064,0 0.84246,-0.9 0.7596,-2 -0.0829,-1.1 -0.5049,-2 -0.93785,-2 -0.43296,0 -0.7872,-0.49814 -0.7872,-1.10699 0,-0.61157 0.72817,-0.82756 1.62706,-0.48263 0.96836,0.3716 2.17,-0.0911 2.96819,-1.14301 1.26416,-1.66592 1.34382,-1.65256 1.38782,0.23263 0.0381,1.63224 0.68062,1.26448 3.49426,-2 1.89617,-2.2 3.46447,-4.39626 3.48512,-4.88057 0.0206,-0.48431 1.61255,-3.07286 3.53755,-5.75231 3.57407,-4.97486 4.26802,-6.45982 2.51145,-5.3742 -0.56607,0.34985 -0.73497,-0.0498 -0.39521,-0.93524 0.32633,-0.85041 0.97465,-1.31052 1.44071,-1.02248 0.46607,0.28804 2.96282,-3.65204 5.54834,-8.75574 2.58553,-5.1037 5.27989,-10.40446 5.98748,-11.77946 2.02793,-3.94075 6.18915,-19.13938 7.86821,-28.73824 3.23246,-18.47939 1.19231,-52.1272 -4.38142,-72.26176 -3.93419,-14.21191 -12.55043,-33.84533 -19.96792,-45.5 -1.40017,-2.2 -3.40244,-5.56228 -4.44949,-7.47173 -3.63207,-6.62366 -16.55839,-21.67467 -28.61739,-33.32123 -11.07113,-10.69247 -13.23135,-12.22149 -16.68186,-11.80761 -0.6254,0.075 -1.41468,-0.96961 -1.75396,-2.32139 -0.79371,-3.1624 -0.55137,-3.14515 -39.35894,-2.80053 l -31.25,0.27751 0.0136,11.22249 c 0.0181,14.84197 0.16812,15.27903 5.72624,16.67858 5.29027,1.3321 6.82863,0.44522 5.86784,-3.38287 C 309.20285,125.96004 308.26634,125 307.09758,125 c -2.31567,0 -3.06615,-2.61607 -3.08393,-10.75 L 304,108 h 30 c 31.35912,0 32.03036,0.0973 28.75,4.16944 -1.10262,1.36874 -4.37225,1.45779 -27.73081,0.75527 -14.56445,-0.43803 -26.59225,-0.68498 -26.72844,-0.54879 -0.1362,0.13619 -0.36983,1.34483 -0.51919,2.68585 -0.26118,2.345 0.0152,2.46191 7.22844,3.05753 4.125,0.34061 17.0625,0.67811 28.75,0.75 L 365,119 v 22 c 0,12.1 0.20383,22 0.45295,22 1.82839,0 5.54989,-2.61633 5.56236,-3.91052 0.0134,-1.39142 0.13611,-1.40257 0.98469,-0.0895 2.35945,3.65098 1.15497,6.60471 -4,9.80922 -2.75,1.70949 -5,3.80176 -5,4.64948 0,0.84771 0.25642,1.5413 0.56982,1.5413 0.69071,0 9.72606,-6.09523 10.43018,-7.03617 0.275,-0.3675 2.3,-1.48537 4.5,-2.48416 2.2,-0.99879 4.40703,-2.03484 4.90451,-2.30233 0.49748,-0.2675 0.59892,0.008 0.22542,0.61243 -0.3735,0.60434 -4.15553,3.25154 -8.40451,5.88267 -4.24898,2.63113 -10.20042,6.72487 -13.22542,9.0972 -3.025,2.37233 -7.6375,5.91187 -10.25,7.86565 l -4.75,3.55232 v 105.4062 c 0,119.33741 -0.95614,107.79292 8.5,102.62903 z m 44.16667,-50.88951 C 398.51603,346.1827 398.93843,345 400.5,345 c 0.825,0 1.5,0.675 1.5,1.5 0,1.56157 -1.1827,1.98397 -2.33333,0.83333 z M 367.30162,288.60064 361.10325,285.5 361.05162,235.81343 361,186.12687 l 6.80168,-4.56344 C 371.54261,179.05355 374.90396,177 375.27135,177 c 0.3674,0 0.68041,25.875 0.69559,57.5 0.0218,45.35895 -0.23576,57.46846 -1.21967,57.35064 -0.686,-0.0822 -4.03654,-1.54465 -7.44565,-3.25 z M 371.32007,150 c 0,-3.575 0.1815,-5.0375 0.40333,-3.25 0.22182,1.7875 0.22182,4.7125 0,6.5 -0.22183,1.7875 -0.40333,0.325 -0.40333,-3.25 z m -43.59035,211.09879 c 2.86082,-1.04567 6.90447,-2.73317 8.98589,-3.75 L 340.5,355.5 l 0.28275,-11.25 c 0.23109,-9.19431 0.0228,-11.25 -1.13999,-11.25 -2.70514,0 -13.73127,9.07011 -16.68161,13.72231 -2.40511,3.79247 -2.96115,5.75915 -2.96115,10.47347 0,6.62679 0.11664,6.68569 7.72972,3.90301 z M 193.36444,323.84502 c 25.81366,-14.06078 70.97967,-40.31606 86.88556,-50.50712 6.49056,-4.15856 6.75,-4.47878 6.75,-8.33134 0,-2.20361 -0.3375,-3.98297 -0.75,-3.95413 -0.98682,0.069 -19.68448,12.10255 -70.75,45.53374 -10.45,6.84133 -22.9375,14.79096 -27.75,17.66586 -7.64305,4.56581 -10.27393,6.74797 -8.13556,6.74797 0.33793,0 6.52543,-3.21974 13.75,-7.15498 z M 335.5,288.78232 c 3.3,-1.85238 6,-3.97936 6,-4.72662 0,-1.15964 -9.96871,-8.95717 -11.54485,-9.03039 -0.29967,-0.0139 -2.88717,2.13937 -5.75,4.7851 L 319,284.62082 v 6.76298 6.76298 l 5.25,-2.99824 c 2.8875,-1.64904 7.95,-4.51383 11.25,-6.36622 z M 225.25973,263.71826 c 17.73215,-11.70495 35.05277,-22.98754 38.49027,-25.0724 3.4375,-2.08487 6.25,-4.15633 6.25,-4.60325 0,-0.44693 -1.07813,-1.51901 -2.39584,-2.38241 -5.95812,-3.9039 -5.03026,-4.35332 -43.38201,21.01249 -19.8141,13.10502 -37.41985,24.59388 -39.12389,25.5308 -1.70404,0.93692 -3.09826,2.09278 -3.09826,2.56857 0,1.21448 6.04312,4.0871 8.75973,4.16399 1.33934,0.0379 15.39134,-8.6042 34.5,-21.21779 z m -122.7294,3.43925 c -0.19515,-1.01337 0.50568,-2.46271 1.55742,-3.22076 1.85276,-1.33539 2.81073,-4.61008 1.02594,-3.50701 -1.48913,0.92033 -2.12821,-3.69112 -0.67277,-4.85453 1.95458,-1.56241 3.49996,-14.62654 4.04496,-34.1948 0.26224,-9.41577 0.73289,-17.78695 1.0459,-18.60263 0.54888,-1.43037 7.10318,-5.83597 20.21243,-13.58619 3.43432,-2.03037 10.63432,-6.79916 16,-10.59729 9.31075,-6.59068 9.76873,-7.08694 10.03941,-10.87855 0.39662,-5.55589 1.46449,-7.11556 7.99032,-11.67017 3.14934,-2.19803 8.42606,-6.01009 11.72606,-8.47125 3.3,-2.46116 9.66389,-6.95575 14.14198,-9.98799 4.47809,-3.03224 8.75309,-6.09212 9.5,-6.79975 1.63601,-1.54996 6.63072,-5.1851 21.85802,-15.90822 6.325,-4.45409 11.78719,-8.55651 12.1382,-9.11648 0.351,-0.55996 1.1385,-0.70891 1.75,-0.33099 0.61149,0.37792 1.1118,0.28662 1.1118,-0.2029 0,-0.48952 1.09603,-1.47662 2.43562,-2.19354 2.12046,-1.13484 2.98907,-1.01503 6.71285,0.92591 2.35249,1.22618 7.44396,3.49255 11.31439,5.03637 3.87043,1.54382 9.96214,4.38992 13.53714,6.32466 6.65976,3.60418 19.23584,8.6786 21.50844,8.6786 0.92761,0 1.37232,-2.98033 1.64844,-11.04729 0.27844,-8.13513 0.75158,-11.2781 1.79486,-11.92288 1.81823,-1.123729 32.85576,-1.194248 53.54826,-0.12167 8.8,0.45614 16.34743,0.51848 16.77207,0.13853 1.00894,-0.90277 -24.1739,-15.739464 -36.31017,-21.392457 C 273.94482,54.027646 212.83704,55.096367 159.40131,82.619698 125.13898,100.26732 93.836149,131.39712 76.748713,164.81543 c -6.794358,13.28788 -13.245867,31.45885 -16.742092,47.15485 -1.81358,8.14191 -1.893166,9.54781 -0.645788,11.40803 5.164215,7.70141 40.321165,45.57681 42.331747,45.60498 0.65592,0.009 1.03291,-0.81241 0.83775,-1.82578 z m 354.08614,-24.69493 c 1.90026,-2.90016 2.00307,-11.50578 0.30396,-25.44256 -3.21095,-26.33752 -16.25551,-57.036 -36.02277,-84.7743 -4.87398,-6.8394 -6.145,-7.7189 -8.9701,-6.20695 -2.50958,1.34309 -2.43907,1.87823 0.71959,5.46123 4.97393,5.64213 18.43231,26.97451 23.33818,36.9925 9.91246,20.24163 14.14866,35.07005 16.49212,57.72906 0.8374,8.09686 1.52255,15.63436 1.52255,16.75 0,2.6765 0.60658,2.55851 2.61647,-0.50898 z M 204.32555,221.1409 c 8.89595,-5.9725 18.33769,-12.32175 20.98166,-14.10945 2.64396,-1.7877 4.60121,-3.45636 4.34943,-3.70814 -0.8947,-0.8947 -10.37581,4.68441 -26.0962,15.35616 C 189.72147,228.07402 184.98566,232 187.49221,232 c 0.36239,0 7.93739,-4.88659 16.83334,-10.8591 z m 262.30962,-1.29549 c -0.74092,-11.30595 -3.41165,-23.45433 -8.14713,-37.05895 C 454.66199,171.79452 447.09105,155 445.96195,155 c -2.03373,0 -1.65214,3.67555 0.91376,8.80152 6.56707,13.11923 13.10383,36.00646 15.07237,52.77314 1.78158,15.17426 1.9369,15.76569 3.74596,14.2643 1.32207,-1.09722 1.47364,-2.86778 0.94113,-10.99355 z m -135.24817,0.64281 8.45582,-5.51178 0.34555,-7.73822 c 0.19006,-4.25602 0.20143,-7.94972 0.0253,-8.20821 -0.51544,-0.75636 -8.43612,3.77024 -11.84158,6.76735 -5.11818,4.50446 -7.36413,9.06221 -7.36832,14.95264 -0.002,2.8875 0.43078,5.25 0.96185,5.25 0.53107,0 4.77071,-2.4803 9.42141,-5.51178 z m -135.03688,-37.6505 c 32.70815,-22.60682 41.76137,-29.05956 41.34912,-29.47181 -1.03472,-1.03472 -6.63909,2.37696 -26.7308,16.27243 -11.81881,8.17391 -24.07167,16.62396 -27.22859,18.77788 -5.48931,3.74528 -7.01698,5.58378 -4.63973,5.58378 0.60506,0 8.36756,-5.02303 17.25,-11.16228 z M 359.77114,143.25 359.5,123.5 l -14.66868,-0.27627 -14.66868,-0.27626 0.44619,11.27626 c 0.2454,6.20195 0.6246,11.78645 0.84267,12.41 0.21807,0.62354 2.79319,2.46621 5.7225,4.09482 2.9293,1.6286 8.926,5.05258 13.326,7.60884 4.4,2.55625 8.34701,4.65108 8.77114,4.65517 0.42413,0.004 0.64913,-8.88006 0.5,-19.74256 z M 409.75,117.41713 c 1.2375,-1.02389 2.25,-2.60761 2.25,-3.51938 C 412,111.44478 388.9352,89.638738 377.20323,81 338.60724,52.580183 299.91931,38.864623 254,37.322251 216.18297,36.052025 184.91835,42.321881 153.23032,57.530763 130.27073,68.550373 113.19224,80.819229 93.073549,100.74622 l -12.42645,12.30805 3.879398,3.97287 C 86.660166,119.21221 88.997526,121 89.72063,121 c 0.723105,0 4.344278,-3.22262 8.047053,-7.16138 C 112.60302,98.057793 131.66137,83.495957 151,73.165631 181.43001,56.9105 210.85219,49.77974 247.5,49.77789 c 35.41085,-0.0018 62.39709,6.405704 93.26981,22.14556 21.07261,10.743456 36.60646,22.169562 53.23019,39.15408 8.88187,9.07464 10.73116,10.53319 12,9.46455 0.825,-0.69484 2.5125,-2.10106 3.75,-3.12495 z",
  ];

  return (
    <motion.svg
      className="h-60 w-[36rem]"
      viewBox="0 0 500 500"
      fill="none"
      strokeWidth={4}
    >
      <defs>
        <linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0000ff" /> {/* Blue color */}
          <stop offset="100%" stopColor="#ffffff" /> {/* Black color */}
        </linearGradient>
      </defs>

      {/* Apply gradient to paths */}
      {letterPaths.map((path, index) => (
        <motion.path
          key={index}
          d={path}
          fill="none"
          stroke="url(#gradient)" // Use the gradient here
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 10 / letterPaths.length,
            delay: (index * 10) / letterPaths.length,
          }}
        />
      ))}
    </motion.svg>
  );
};

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const router = useNavigate();

  // Hide the splash screen after 5 seconds and navigate to the main page
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      router("/userLogin"); // Navigate to the main route or desired page
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-surface flex justify-center items-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1}}
            transition={{ duration: 1, ease: "easeIn" }}
            className="text-center"
          >
            <HostigoAnimation />
           
            {/* "Hostigo" Text with Gradient Fill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }} // Delay to sync with logo animation
              className="text-4xl font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-white"
              
            >
              HOSTIGO
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default SplashScreen;
