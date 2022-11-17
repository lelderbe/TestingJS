const code =
	"r=readline;\
[a,b,x,y]=r().split` `;\
for(;r();){d='';\
if(y!=b)[d,y]=y<+b?['S',+y+1]:['N',y-1];\
if(x!=a)[d,x]=x<+a?[d+'E',+x+1]:[d+'W',x-1];\
print(d)}";

console.log(code);

const result = Buffer(code).toString('ucs2');

console.log(result);

eval(
	Buffer(
		'㵲敲摡楬敮嬻ⱡⱢⱸ嵹爽⤨献汰瑩⁠㭠潦⡲爻⤨⤻摻✽㬧晩礨㴡⥢摛礬㵝㱹戫嬿匧Ⱗ礫ㄫ㩝❛❎礬ㄭ㭝晩砨㴡⥡摛砬㵝㱸愫嬿⭤䔧Ⱗ砫ㄫ㩝摛✫❗砬ㄭ㭝牰湩⡴⥤',
		'ucs2',
	) + '',
);
