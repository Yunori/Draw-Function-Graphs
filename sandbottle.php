<?php
for($f = 1; isset($_POST['input'.$f]); $f++)
	$input[$f-1] = $_POST['input'.$f];

$param[0] = $_POST['zoom'];
$param[1] = $_POST['start'];
$param[2] = $_POST['end'];
$param[3] = $_POST['xint'];
$param[4] = $_POST['yint'];
$param[5] = $_POST['pasx'];
$param[6] = $_POST['decalx'];
$param[7] = $_POST['decaly'];

function fill($input, $param)
{
	echo '<svg width="500" height="500" id="graph">';
	echo '<rect x="0" y="0" rx="0" ry="0" width="500" height="500" style="fill:rgb(255,255,255);stroke-width:3;stroke:rgb(0,0,0)" />';
	for($i=0; empty($input[$i]) == 0; $i++)
	{
		preg_match_all("/(\w|\d)+[\^](\w|\d)+/", $input[$i], $preg);
		for($x=0; isset($preg[0][$x]); $x++)
			$input[$i] = str_replace($preg[0][$x], 'pow('.$preg[1][$x].','.$preg[2][$x].')' , $input[$i]);
		for($x = $param[1], $z=0; $x <= $param[2]; $x = $x + $param[5])
		{
			$vinput = str_replace("x", $x, $input[$i]);
			eval('$posy = '.$vinput.';');
			$vposy = $posy*$param[0]*$param[4] - ($posy*$param[0]*$param[4])*2 + 250 + $param[7];
			$posx = $x*$param[0]*$param[3]+250 + $param[6];
			if($vposy >= 0)
			{
				$points[$z] = $posx.','.$vposy;
				$z++;
			}
		}
		draw($points, $i);
		unset($points);
	}
	zero($param[6], $param[7]);
	echo '</svg>';
}

function zero($decalx, $decaly)
{
	$lineposx=250+$decalx;
	$lineposy=250+$decaly;
	echo '<line x1="'.$lineposx.'" x2="'.$lineposx.'" y1="0" y2="500" style="stroke:rgba(180, 180, 180, 0.7);stroke-width:2" />';
	echo '<line y1="'.$lineposy.'" y2="'.$lineposy.'" x1="0" x2="500" style="stroke:rgba(180, 180, 180, 0.7);stroke-width:2" />';
}

function draw($points, $i)
{
	$colors = array("red","blue","green","yellow");
	echo '<polygon points="';
	$firstx = explode(',', $points[0]);                                                                                                                                                  
        echo $firstx[0] .',500 ';                                                                                                                                                      
        for($z=0; isset($points[$z]); $z++)                                                                                                                                          
                echo $points[$z].' ';                                                                                                                                         
    $lastx = explode(',', $points[$z-1]);                                                                                                                                   
    echo $lastx[0] .',500';
	echo '" style="fill:'.$colors[$i].';stroke:black;stroke-width:1" />';
}

fill($input, $param);

?>