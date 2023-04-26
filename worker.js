//I defined a variable called count to store the current count, and a function called countTo100 to perform the counting

// Define a variable to store the current count
var count = 0;

//Function to perform the counting
function countTo100() {
	if (count <= 100) {
		// Increment the count
		count++;
		self.postMessage(count);
		
		setTimeout(countTo100, 100);
	}
}

self.addEventListener("message", function(event) {

	countTo100();
});
