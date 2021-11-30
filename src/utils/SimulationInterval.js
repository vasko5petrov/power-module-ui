export class SimulationInterval {
	constructor({up, startValue, floor, increment, ceiling, label, intervalRate, updateFunction}) {
		this.up = up;
		this.startValue = startValue;
		this.currentValue = startValue;
		this.floor = floor;
		this.increment = increment;
		this.ceiling = ceiling;
		this.label = label;
		this.intervalId = null;
		this.intervalRate = intervalRate;
		this.updateFunction = updateFunction;
	}

	performCalculations = () => {
		if (this.up === true && this.currentValue <= this.ceiling) {
			this.currentValue += this.increment;

			if (this.currentValue === this.ceiling) {
				this.up = false;
			}
		} else {
			this.up = false
			this.currentValue -= this.increment;

			if (this.currentValue === this.floor) {
				this.up = true;
			}
		}

		this.updateFunction(this.currentValue);
	}

	start = () => {
		if(!this.intervalId) {
			this.intervalId = setInterval(this.performCalculations, 1000);
		}
	}

	clear = () => {
		if(this.intervalId) {
			this.currentValue = 0;
			this.up = true;
			
		    this.updateFunction(this.currentValue);
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
	}
}


export const batterySettings = {
	up: true,
	floor: 15,
	ceiling: 30,
	increment: 1,
}


export const consumerSettings = {
	up: false,
	floor: 1.5,
	ceiling: 4,
	increment: 0.25,
}