"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var NoteCreator = (function () {
    function NoteCreator() {
        this.createNote = new core_1.EventEmitter();
        this.newNote = {
            title: '',
            value: ''
        };
    }
    NoteCreator.prototype.onCreateNote = function () {
        var _a = this.newNote, title = _a.title, value = _a.value;
        if (title && value) {
            this.createNote.next({ title: title, value: value });
        }
        this.reset();
    };
    NoteCreator.prototype.reset = function () {
        this.newNote = {
            title: '',
            value: ''
        };
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NoteCreator.prototype, "createNote", void 0);
    NoteCreator = __decorate([
        core_1.Component({
            selector: 'note-creator',
            styles: ["\n    .note-creator {\n      padding: 20px;\n      background-color: white;\n      border-radius: 3px;\n    }\n    .title {\n      font-weight: bold;\n      color: rgba(0,0,0,0.8);\n    }\n    .full {\n      height: 100px;\n    }\n  "],
            template: "\n    <div class=\"note-creator shadow-2\">\n      <form class=\"row\" (ngSubmit)=\"onCreateNote()\">\n        <input\n          type=\"text\"\n          [(ngModel)]=\"newNote.title\"\n          name=\"newNoteTitle\"\n          placeholder=\"Title\"\n          class=\"col-xs-10 title\"\n        >\n        <input\n          type=\"text\"\n          [(ngModel)]=\"newNote.value\"\n          name=\"newNoteValue\"\n          placeholder=\"Take a note...\"\n          class=\"col-xs-10\"\n        >\n        <div class=\"actions col-xs-12 row between-xs\">\n          <button\n            type=\"submit\"\n            class=\"btn-light\"\n           >\n            Done\n          </button>\n        </div>\n      </form>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NoteCreator);
    return NoteCreator;
}());
exports.NoteCreator = NoteCreator;
//# sourceMappingURL=note-creator.js.map