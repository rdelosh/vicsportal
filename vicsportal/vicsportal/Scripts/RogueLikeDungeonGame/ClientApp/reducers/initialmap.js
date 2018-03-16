export default function initialMap(){
	let WIDTH=70
	let HEIGHT=50
	let playerloc = 0;
	let bossloc = 0;

	let tiles = []
	for(let i =0;i<WIDTH*HEIGHT;i++){
		tiles.push({type:'FLOOR'})
	}
	

	let walls =[3435,3365,3295,3225,3155,3085,3015,2945,2875,2805,3229,3230,3231,3232,3233,3234,3235,3236,2456,2457,2458,2459,2460,2461,2462,2463,2464,2465,2466,2536,2606,2676,2746,2816,2886,2956,3026,3096,3166,3452,3382,3312,3242,3172,3102,3032,2892,2962,2822,2752,2682,2612,2542,2472,2402,2332,2100,2101,2103,2104,2102,2105,2106,2107,2108,2178,2248,2318,2388,1685,1686,1687,1688,1689,1690,1691,1692,1693,1694,1695,1696,1697,1698,1699,1700,1701,1702,1703,1704,1705,1706,1707,1708,1709,1710,1775,1776,1846,1847,1917,1918,1988,1989,2059,2060,2130,2131,2201,2202,2272,2273,2343,2344,2414,2415,2485,2486,2556,2557,2627,2628,2698,2699,2769,2770,2840,2841,2911,2912,2282,2283,2213,2214,2144,2145,2075,2076,2006,2007,1937,1938,1868,1869,1799,1800,1730,1731,1661,1662,1592,1593,1523,1524,1454,1455,1385,1386,1316,1317,1247,1248,1178,1179,1109,1110,1040,1041,971,972,1660,1590,1520,1450,1380,1310,1240,1170,1100,1030,1029,1028,1027,1025,1026,1024,1018,1017,1016,1015,1014,1013,1011,1009,1007,1008,1010,1012,1006,1005,1004,1003,1002,447,517,587,657,727,797,867,937,27,97,167,1001,999,1000,998,997,996,995,994,993,1062,992,1061,1060,1130,1129,1199,922,852,851,781,780,640,710]

    let enemies = [{enemylocation:2641,hp:40},
    			   {enemylocation:2515,hp:40},
    			   {enemylocation:1396,hp:40},
    			   {enemylocation:410,hp:40}]

    let locs=null;
    walls.map((wall,index)=>{
    	tiles[wall]={type:'WALL'}
    	
    	if(index===walls.length-1){
		  	locs =addPlayerAndBoss(tiles,WIDTH,HEIGHT)
	    	tiles[locs.playerlocation] ={type:'PLAYER'}
	    	tiles[locs.bosslocation] ={type:'BOSS'}
    	}

    })

    enemies.map((enemy,index)=>{
    	tiles[enemy.enemylocation]={type:'ENEMY',hp:enemy.hp}
    	locs.enemilocs=enemy
    })

    

    

    return {tiles:tiles,locs:locs,WIDTH:WIDTH,HEIGHT:HEIGHT};
}

function generateRandomLocation(WIDTH,HEIGHT){
	return Math.floor(Math.random() * (WIDTH*HEIGHT-1 - 0) + 0);
}
function addPlayerAndBoss(mytiles,WIDTH,HEIGHT){
	let increaseIndex =true; //if true add+++++, if false subtract-----
	let quantity = 2000;
	let tiles = mytiles

    let randomplayerlocation = generateRandomLocation(WIDTH,HEIGHT);
    
    let randombosslocation = generateRandomLocation(WIDTH,HEIGHT);

	//console.log(tiles)
    if(randombosslocation+quantity<tiles.length){
    	console.log("bossloc: "+(randombosslocation+quantity))
    	console.log(tiles[randombosslocation+quantity]);
    	if(tiles[randombosslocation+quantity].type==='FLOOR'){
    		console.log(randombosslocation+quantity)
    		randombosslocation=randombosslocation+quantity
    	}else{
    		increaseIndex ? quantity=quantity+30 : quantity=quantity-30;
    	}

    }else{
    	increaseIndex=!increaseIndex
    }

	return {playerlocation:randomplayerlocation,bosslocation:randombosslocation}	
}