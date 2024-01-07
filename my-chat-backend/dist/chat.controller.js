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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
let ChatController = class ChatController {
    async receiveMessage(body) {
        const userMessage = body.userMessage;
        const botResponse = this.generateResponse(userMessage);
        return { botResponse };
    }
    generateResponse(userMessage) {
        const normalizedMessage = userMessage.toLowerCase().trim();
        if (/hello|hi|hey/.test(normalizedMessage)) {
            return 'Hi there! Hope you havin a good day? How can i help?';
        }
        else if (/help|support/.test(normalizedMessage)) {
            return 'I will be glad to help please feel free to ask';
        }
        else if (/sports|football|basketball/.test(normalizedMessage)) {
            return 'Ok,are you looking for sports news or scores?';
        }
        else if (/politics|election|government/.test(normalizedMessage)) {
            return 'Political topics are controversial sometimes! What specific information are you looking for?';
        }
        else if (/call|phone|contact/.test(normalizedMessage)) {
            return 'Would you like to make a call or need assistance?';
        }
        else {
            return 'Sorry, I did not understand that. Could you possible rephrase your doubt?';
        }
    }
};
exports.ChatController = ChatController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "receiveMessage", null);
exports.ChatController = ChatController = __decorate([
    (0, common_1.Controller)('chat')
], ChatController);
//# sourceMappingURL=chat.controller.js.map