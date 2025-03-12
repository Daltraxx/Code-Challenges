//Implement a debounce function in JavaScript that limits the frequency of a function’s execution when it’s called repeatedly within a specified time frame. 

//By delaying the execution of the debounce function until the specified time frame has passed, the frequency can be limited. 

const debounce = (func, timeout = 300) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {func.apply(this, args); }, timeout);
    };
    
}

const saveInput = () => console.log('Saving data');

const processChange = debounce(() => saveInput());

processChange();
