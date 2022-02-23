/**
 * 
 * Поиск наибольшего общего делителя
 * 
 * Алгоритм: В самом простом случае алгоритм Евклида применяется к паре
 * положительных целых чисел и формирует новую пару, которая состоит из
 * меньшего числа и разницы между большим и меньшим числом.
 * Процесс повторяется, пока числа не станут равными.
 * Найденное число и есть наибольший общий делитель исходной пары.
 */

function nod_recursion(a, b) {
	if (a == b) {
		return a;
	}
	if (a < b) {
		return nod_recursion(a, b - a);
	}
	return nod_recursion(a - b, b);
}

// Решение через цикл проще и застраховано от переполнения стека.
function nod_iterate(a, b) {
	while (a != b) {
		[a, b] = a < b ? [a, b - a] : [a - b, b];
	}
	return a;
}


console.log(nod_iterate(1232, 82));
console.log(nod_iterate(123232, 8));

console.log(nod_recursion(1232, 82));
// console.log(nod_recursion(123232, 8));
console.log(nod_recursion(16, 3));
