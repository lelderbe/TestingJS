
async function g() {
	console.log("in g() function");

}


async function f() {
	console.log("in f() function");
	//g();
	await g();
	console.log("after g() function");
}

f();
/*
(async () => {
	await f();
})();
*/
//let promise = Promise.resolve();

//promise.then(() => console.log("промис выполнен"));

console.log("код выполнен");