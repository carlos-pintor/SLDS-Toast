({
    onshow : function(component, event, helper) {
        //get params from event
        var params = event.getParam('arguments');
        component.set('v.type', params.type);
        component.set('v.title', params.title);
        component.set('v.message', params.message);
        component.set('v.autoClose', params.autoClose);
        component.set('v.autoCloseTime', params.autoCloseTime);
        //show the toast
        component.set('v.showThis', true);
        //if auto close? then close the toast
        var autoClose = component.get('v.autoClose');
        if(autoClose){
            var autoCloseTime = component.get('v.autoCloseTime');
            setTimeout(function(){ 
                component.set('v.showThis', false);
            }, autoCloseTime);
        }
    },

    onclickClose : function(component, event, helper) {
        component.set('v.showThis', false);
    }
})
