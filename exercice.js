function StopWatch (){
    
    let startTime;
    let endTime;
    let duration = 0;
    let Running = false;

    this.Start = function() {
        if (!Running)
        {    
            startTime = new Date();      
            Running = true;
        }            
        else
            throw new Error('StopWatch is already Running');
    };

    this.Stop = function() {
        if (Running)
        {
            endTime = new Date();
            duration += (endTime.getTime() - startTime.getTime()) / 1000;
            Running = false;    
        }            
        else
            throw new Error('StopWatch is not Running');
    }

    this.Rest = function() {
        startTime = null;
        endTime = null;
        duration = 0;
        Running = false;
    }    

    Object.defineProperty(this, 'duration', {
        get: function() { 
            return duration;
        }
    });
}



