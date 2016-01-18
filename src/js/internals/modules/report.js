/* global module */
var ReportModel = function () {
    var elementNews = $("<div />").addClass("report"),
            elementContainer = $("<div />").addClass("container"),
            elementActions = $("<ul />").addClass("r-actions"),
            elementContent = $("<div />").addClass("content"),
            elementOpen = null;
    
    elementNews.append(elementContainer
            .append(elementActions)
            .append(elementContent));

    var buttonElement = function () {
        if (!elementOpen) {
            elementOpen = $("<div />").addClass("open");
            elementContent.append(elementOpen);
        }
        return elementOpen;
    };

    this.newContent = function () {
        elementContent = $("<div />").addClass("content");
        elementContainer.prepend(elementContent);
        return this;
    };

    this.title = function (title) {
        elementContent.append($("<h2 />").text(title));
        return this;
    };

    this.subtitle = function (subtitle) {
        elementContent.append($("<h3 />").text(subtitle));
        return this;
    };
    
    this.label = function (content) {
        var span = $("<span />").addClass("label").text(content);
        elementContent.append(span);
        return span;
    };

    this.canvas = function (width, height) {
        width = width || 250;
        height = height || 250;
        var canvas = $("<canvas />").attr({
            width: width,
            height: height
        }).addClass("chart");
        elementContent.append(canvas);
        return canvas.get(0);
    };

    this.paragraph = function (text) {
        var p = $("<p />").text(text);
        elementContent.append(p);
        return p;
    };

    this.button = function (name, action) {
        buttonElement().append($("<button />").text(name).click(function (e) {
            e.preventDefault();
            action();
        }).addClass("button"));

        return this;
    };

    this.content = function () {
        return elementContent;
    };

    this.element = function () {
        return elementNews;
    };

    this.newAction = function (icon, action) {
        elementActions.prepend($("<li />").append($("<i />").addClass("fa " + icon)).click(function (e) {
            e.preventDefault();
            action();
        }));
        return this;
    };

    this.newAction("fa-times", function () {
        elementNews.remove();
    });

    return this;
};

module.exports = function (controller) {

    controller.registerCall("report", function (title, subtitle, paragraph) {
        var model = new ReportModel();
        model.title(title);
        model.subtitle(subtitle);
        model.paragraph(paragraph);
        return model;
    });

};