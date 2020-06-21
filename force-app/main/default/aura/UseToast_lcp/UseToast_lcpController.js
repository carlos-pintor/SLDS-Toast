({
    //Show toast with lightning:notificationsLibrary. It doesn't work with Lightning Out
    /*handleShowToast : function(component, event, helper) {
        component.find('notifLib').showToast({
            "title": "Success!",
            "message": "The record has been updated successfully.",
            "variant": "success"
        });
    },*/

    onclickSLDSToast : function(component, event, helper) {
        var toast = component.find("toast");
        toast.show('success', 'Success!', 'Your request has been processed successfully');
    }
})
