const ajaxUtils = {
    getRequestObject: function() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        } else {
            window.alert("Ajax is not supported");
            return null;
        }
    },
    
    sendGetRequest: function(requestUrl, responseHandler, isJSON) {
        let request = this.getRequestObject();
        request.onreadystatechange = function () {
            handleResponse(request, responseHandler, isJSON);
        };
        request.open("GET", requestUrl, true);
        request.send(null);
    },
    
    handleResponse: function(request, responseHandler, isJSON = true) {
        if (request.readyState == 4 && request.status == 200) {
            responseHandler(isJSON ? JSON.parse(request.responseText) : request.responseText);
        }
    },
    
    sendPostRequest: function(requestUrl, requestBody, responseHandler) {
        let request = this.getRequestObject();
        request.onreadystatechange = function () {
            handleResponse(request, responseHandler);
        };
        request.open("POST", requestUrl, true);
        request.send(requestBody);
    }
};

// Експортуємо об'єкт ajaxUtils
export { ajaxUtils };
