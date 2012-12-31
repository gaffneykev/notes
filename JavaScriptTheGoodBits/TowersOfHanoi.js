var hanoi = function hanoi(disc, src, aux, dest){
	if(disc > 0){
		hanoi(disc-1, src, dest, aux);
document.writeln('Moving disc: ' + disc + ' from: ' + src + ' to ' + dest);
		hanoi(disc-1, aux, src, dest);
	}
}

hanoi(3, 'Src', 'Aux', 'Dest');
