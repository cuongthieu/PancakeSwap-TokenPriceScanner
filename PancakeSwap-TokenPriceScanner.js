
// replace your token hash here
const tokenHash = "0x3465fd2d9f900e34280abab60e8d9987b5b5bb47"
// replace your number of token here
const myToken = 492;
// replace your target value in usd
const targetValue = 150;

var count = 0;
//----------------------MAIN FUNCTION----------------------------------------------------------------------------------------
const TokenPriceScanner = async () => {
  const expectedDate = '12/1/2021';
  const response = await fetch('https://api.pancakeswap.info/api/v2/tokens/'+tokenHash, {
    method: 'GET'
  });
  
  const responseObject = await response.json();
  
  for (const [key, value] of Object.entries(responseObject)) {
	console.log(responseObject[key])
	var tokenValue = parseFloat(responseObject[key].price);
	console.log(myToken * tokenValue);
	let myTokenValue = myToken * tokenValue;
	if(myTokenValue >= targetValue){
		// music play if you get to the target value
		let letsMusic = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3');
		letsMusic.play();
	}
  }
  console.log(count)
    setTimeout(function() {
		count++;
  TokenPriceScanner();
	}, 3000);
};


TokenPriceScanner();

//----------------------END FUNCTION----------------------------------------------------------------------------------------
