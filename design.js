var Singleton = (function(){
    function Singleton() {
        var object = new Object("I Love spongebob. You love spongebob.");
    return object;
    }
    var instance;
    return {
        getInstance: function(){
            if (null == instance) {
                instance = new Singleton();               
                instance.constructor = null; 
            }
            return instance; 
        }
    };
})();

function run() {
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
//did this to show the instances
    console.log("Same instance? " + (instance1 + instance2) + (instance1===instance2));
}

run();