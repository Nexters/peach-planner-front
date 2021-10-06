"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var style_1 = require("../../component/style/style");
var styled_components_1 = require("styled-components");
var Shape_2_png_1 = require("src/images/Shape 2.png");
var react_1 = require("react");
var react_query_1 = require("react-query");
var ChatRoom_1 = require("src/api/ChatRoom");
var ChatMessage_1 = require("src/api/ChatMessage");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var stompjs_1 = require("@stomp/stompjs");
var User_1 = require("src/api/User");
var client = new stompjs_1.Client({
    brokerURL: 'ws://api.peachplanner.com/websocket',
    connectHeaders: {
        Authorization: "Bearer " + localStorage.getItem('accessToken')
    },
    // debug: (str) => console.log(str),
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
    onConnect: function (receipt) {
        console.log(receipt.body);
    }
});
var subscribeIds = new Set();
var ChatContainer = function () {
    var _a = react_1["default"].useState(-1), selected = _a[0], setSelected = _a[1];
    var rooms = react_query_1.useQuery(['rooms'], ChatRoom_1.fetchChatRooms).data;
    var user = react_query_1.useQuery(['getUser'], User_1.getUser).data;
    var currentRoom = react_1["default"].useRef({});
    var _b = react_1["default"].useState(''), typingMessage = _b[0], setTypingMessage = _b[1];
    var chatRoomParticipant = react_1["default"].useRef();
    var _c = react_1["default"].useState([]), chatMessages = _c[0], setChatMessages = _c[1];
    var messagesEndRef = react_1["default"].useRef(null);
    var me = react_1["default"].useRef();
    react_1.useEffect(function () {
        client.activate();
        if (user) {
            me.current = user;
        }
    }, [user]);
    react_1.useEffect(function () {
        var _a;
        var subscribeRooms = function () {
            rooms === null || rooms === void 0 ? void 0 : rooms.forEach(function (room) {
                if (subscribeIds.has(room.id))
                    return;
                if (client.state === stompjs_1.ActivationState.ACTIVE) {
                    client.subscribe("/topic/chat/" + room.id, function (message) {
                        console.log(currentRoom.current.id);
                        if (currentRoom.current.id === room.id) {
                            var chatMessage_1 = JSON.parse(message.body);
                            setChatMessages(function (draft) {
                                var _a;
                                return __spreadArrays(draft, [
                                    {
                                        id: chatMessage_1.id,
                                        sender: (_a = chatRoomParticipant.current) === null || _a === void 0 ? void 0 : _a[chatMessage_1.senderId],
                                        senderId: chatMessage_1.senderId,
                                        messageType: chatMessage_1.messageType,
                                        senderType: chatMessage_1.senderType,
                                        message: chatMessage_1.message,
                                        dateTime: chatMessage_1.dateTime
                                    }
                                ]);
                            });
                            console.log(chatMessages);
                        }
                    });
                }
                subscribeIds.add(room.id);
            });
        };
        if (client.state === stompjs_1.ActivationState.ACTIVE && ((_a = client.webSocket) === null || _a === void 0 ? void 0 : _a.readyState) === stompjs_1.StompSocketState.OPEN) {
            subscribeRooms();
        }
        if (client.state === stompjs_1.ActivationState.INACTIVE) {
            client.onConnect = function (receipt) {
                subscribeRooms();
            };
        }
    }, [rooms]);
    react_1.useEffect(function () {
        var _a;
        (_a = messagesEndRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
    }, [chatMessages]);
    return (react_1["default"].createElement(Container, null,
        react_1["default"].createElement(Page, null,
            react_1["default"].createElement(Row, null,
                react_1["default"].createElement(Cell, { width: "35%" },
                    react_1["default"].createElement(style_1.Title, { height: "27px", width: "auto", fontSize: "18px", lineHeight: "27px", padding: "24px 0 24px 16px" }, "\uBA54\uC2DC\uC9C0")),
                react_1["default"].createElement(Cell, { width: "65%" },
                    react_1["default"].createElement(style_1.Title, { height: "20px", width: "auto", fontSize: "14px", lineHeight: "20px", padding: "24px 0 24px 16px" }, currentRoom.current.roomName))),
            react_1["default"].createElement(Row, { height: "60vh" },
                react_1["default"].createElement(Cell, { width: "35%" },
                    react_1["default"].createElement(CellContent, null, rooms ? (rooms.map(function (room, index) {
                        return (react_1["default"].createElement(ChatCard, { selected: selected === index, onClick: function () {
                                setSelected(index);
                                currentRoom.current = rooms[index];
                                (function () { return __awaiter(void 0, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, Promise.all([
                                                    ChatMessage_1.fetchChatMessages(currentRoom.current.id),
                                                    ChatRoom_1.fetchChatRoomParticipant(currentRoom.current.id)
                                                ]).then(function (_a) {
                                                    var messages = _a[0], roomParticipants = _a[1];
                                                    setChatMessages(messages.map(function (message) {
                                                        return {
                                                            id: message.id,
                                                            sender: roomParticipants[message.senderId],
                                                            senderId: message.senderId,
                                                            messageType: message.messageType,
                                                            senderType: message.senderType,
                                                            message: message.message,
                                                            dateTime: message.dateTime
                                                        };
                                                    }));
                                                    chatRoomParticipant.current = roomParticipants;
                                                })];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })();
                            } },
                            react_1["default"].createElement(ChatProfileImg, { src: Shape_2_png_1["default"] }),
                            react_1["default"].createElement(ChatProfileText, null,
                                react_1["default"].createElement(ChatProfileLine, null,
                                    react_1["default"].createElement(ChatProfileName, null, room.roomName),
                                    react_1["default"].createElement(ChatLastMessageDate, null, new Date(room.lastMessageDateTime).toDateString())),
                                react_1["default"].createElement(ChatLastMessage, null, room.lastMessage))));
                    })) : (react_1["default"].createElement(react_1["default"].Fragment, null)))),
                react_1["default"].createElement(Cell, { width: "65%" },
                    react_1["default"].createElement(CellContent, null,
                        chatMessages && chatMessages.length > 0 ? (react_1["default"].createElement(ChatMessageDate, null, new Date(chatMessages[0].dateTime).toLocaleDateString('ko-KR'))) : (react_1["default"].createElement(react_1["default"].Fragment, null)),
                        chatMessages ? (chatMessages.map(function (message) {
                            var _a;
                            if (message.messageType === 'SYSTEM_START') {
                                return (react_1["default"].createElement(SystemMessageDiv, null,
                                    react_1["default"].createElement(SystemMessage, null, message.message)));
                            }
                            if (message.messageType === 'SYSTEM_END') {
                                return (react_1["default"].createElement(SystemMessageDiv, null,
                                    react_1["default"].createElement(SystemMessage, null, message.message),
                                    react_1["default"].createElement("a", { href: "/" },
                                        react_1["default"].createElement(SystemMessageLink, null, "\uD50C\uB798\uB108 \uB9AC\uBDF0 \uC791\uC131\uD558\uAE30"))));
                            }
                            if (((_a = me.current) === null || _a === void 0 ? void 0 : _a.id) === message.senderId) {
                                return (react_1["default"].createElement(MyChatMessageDiv, null,
                                    react_1["default"].createElement(MyChatMessageCard, null,
                                        react_1["default"].createElement(MyChatMessageTitle, null,
                                            react_1["default"].createElement(ChatMessageProfileName, null, message.sender),
                                            react_1["default"].createElement(ChatMessageProfileDatetime, null, new Date(message.dateTime).toLocaleTimeString('ko-KR', {
                                                hour12: true,
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            }))),
                                        react_1["default"].createElement(MyChatMessageText, null, message.message)),
                                    react_1["default"].createElement(ChatMessageProfileImg, { src: Shape_2_png_1["default"] })));
                            }
                            return (react_1["default"].createElement(ChatMessageDiv, null,
                                react_1["default"].createElement(ChatMessageProfileImg, { src: Shape_2_png_1["default"] }),
                                react_1["default"].createElement(ChatMessageCard, null,
                                    react_1["default"].createElement(ChatMessageTitle, null,
                                        react_1["default"].createElement(ChatMessageProfileName, null, message.sender),
                                        react_1["default"].createElement(ChatMessageProfileDatetime, null, new Date(message.dateTime).toLocaleTimeString('ko-KR', {
                                            hour12: true,
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        }))),
                                    react_1["default"].createElement(ChatMessageText, null, message.message))));
                        })) : (react_1["default"].createElement(react_1["default"].Fragment, null)),
                        react_1["default"].createElement("div", { ref: messagesEndRef })),
                    react_1["default"].createElement(ChatMessageBoxDiv, null,
                        react_1["default"].createElement(ChatMessageClipDiv, null,
                            react_1["default"].createElement(FontAwesomeIconDiv, { icon: free_solid_svg_icons_1.faPaperclip })),
                        react_1["default"].createElement(ChatMessageInputForm, { onSubmit: function (e) {
                                e.preventDefault();
                                ChatMessage_1.sendMessage({
                                    roomId: currentRoom.current.id,
                                    message: typingMessage
                                });
                                setTypingMessage('');
                                return false;
                            } },
                            react_1["default"].createElement(ChatMessageInput, { placeholder: "\uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uC138\uC694.", value: typingMessage, onChange: function (e) { return setTypingMessage(e.target.value); } }))))))));
};
exports["default"] = ChatContainer;
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: white;\n  padding: 0 21vw;\n"], ["\n  background-color: white;\n  padding: 0 21vw;\n"])));
var Page = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: table;\n  background-color: white;\n  height: 100%;\n  width: 100%;\n"], ["\n  display: table;\n  background-color: white;\n  height: 100%;\n  width: 100%;\n"])));
var Row = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: table-row;\n  width: 100%;\n  height: ", ";\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  margin: 20px 0;\n"], ["\n  display: table-row;\n  width: 100%;\n  height: ", ";\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  margin: 20px 0;\n"])), function (props) { return props.height; });
var Cell = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: table-cell;\n  width: ", ";\n  border: 1px solid;\n  border-color: #d8d8d8;\n  vertical-align: top;\n  max-height: 340px;\n  position: relative;\n"], ["\n  display: table-cell;\n  width: ", ";\n  border: 1px solid;\n  border-color: #d8d8d8;\n  vertical-align: top;\n  max-height: 340px;\n  position: relative;\n"])), function (props) { return props.width; });
var CellContent = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  overflow-y: auto;\n  position: relative;\n  display: flex;\n  max-height: 500px;\n  flex-direction: column;\n  padding-bottom: 24px;\n\n  &::-webkit-scrollbar {\n    width: 4px;\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: #2f354266;\n    border-radius: 10px;\n  }\n  &::-webkit-scrollbar-track {\n    background-color: transparent;\n    border-radius: 10px;\n    box-shadow: inset 0px 0px 5px white;\n  }\n"], ["\n  overflow-y: auto;\n  position: relative;\n  display: flex;\n  max-height: 500px;\n  flex-direction: column;\n  padding-bottom: 24px;\n\n  &::-webkit-scrollbar {\n    width: 4px;\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: #2f354266;\n    border-radius: 10px;\n  }\n  &::-webkit-scrollbar-track {\n    background-color: transparent;\n    border-radius: 10px;\n    box-shadow: inset 0px 0px 5px white;\n  }\n"])));
var ChatCard = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  margin: 8px 8px 8px 8px;\n  height: 76px;\n  border-radius: 8px;\n  background-color: ", ";\n"], ["\n  display: flex;\n  margin: 8px 8px 8px 8px;\n  height: 76px;\n  border-radius: 8px;\n  background-color: ", ";\n"])), function (props) { return (props.selected ? '#F1F3F5' : 'inherit'); });
var ChatProfileImg = styled_components_1["default"].img(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 40px;\n  height: 40px;\n  margin: 8px;\n  border-radius: 30px;\n"], ["\n  width: 40px;\n  height: 40px;\n  margin: 8px;\n  border-radius: 30px;\n"])));
var ChatProfileLine = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 4px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 4px;\n"])));
var ChatProfileText = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  padding: 4px;\n"], ["\n  padding: 4px;\n"])));
var ChatProfileName = styled_components_1["default"].p(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  color: #000000;\n  font-family: SpoqaHanSans;\n  font-size: 13px;\n  letter-spacing: 0;\n  line-height: 19px;\n  font-weight: bold;\n"], ["\n  color: #000000;\n  font-family: SpoqaHanSans;\n  font-size: 13px;\n  letter-spacing: 0;\n  line-height: 19px;\n  font-weight: bold;\n"])));
var ChatLastMessageDate = styled_components_1["default"].p(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  height: 17px;\n  color: #868e96;\n  font-family: SpoqaHanSans;\n  font-size: 11px;\n  letter-spacing: 0;\n  line-height: 17px;\n  text-align: right;\n"], ["\n  height: 17px;\n  color: #868e96;\n  font-family: SpoqaHanSans;\n  font-size: 11px;\n  letter-spacing: 0;\n  line-height: 17px;\n  text-align: right;\n"])));
var ChatLastMessage = styled_components_1["default"].p(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  width: 19rem;\n  height: 38px;\n  color: #868e96;\n  font-family: SpoqaHanSans;\n  font-size: 13px;\n  letter-spacing: 0;\n  line-height: 19px;\n"], ["\n  width: 19rem;\n  height: 38px;\n  color: #868e96;\n  font-family: SpoqaHanSans;\n  font-size: 13px;\n  letter-spacing: 0;\n  line-height: 19px;\n"])));
var ChatMessageDate = styled_components_1["default"].p(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  padding: 20px 40px 20px 40px;\n  height: 18px;\n  color: #495057;\n  font-family: SpoqaHanSans;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 18px;\n  text-align: center;\n"], ["\n  padding: 20px 40px 20px 40px;\n  height: 18px;\n  color: #495057;\n  font-family: SpoqaHanSans;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 18px;\n  text-align: center;\n"])));
var SystemMessageDiv = styled_components_1["default"].div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  margin: 0 39px 0 39px;\n  width: 645px;\n  border-radius: 3px;\n  background-color: #f1f3f5;\n"], ["\n  margin: 0 39px 0 39px;\n  width: 645px;\n  border-radius: 3px;\n  background-color: #f1f3f5;\n"])));
var SystemMessage = styled_components_1["default"].p(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  padding: 11px 0 11px 12px;\n  height: 18px;\n  color: #868e96;\n  font-family: SpoqaHanSans;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 18px;\n"], ["\n  padding: 11px 0 11px 12px;\n  height: 18px;\n  color: #868e96;\n  font-family: SpoqaHanSans;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 18px;\n"])));
var ChatMessageDiv = styled_components_1["default"].div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  display: flex;\n  margin: 0 39px 0 39px;\n  width: 645px;\n"], ["\n  display: flex;\n  margin: 0 39px 0 39px;\n  width: 645px;\n"])));
var ChatMessageTitle = styled_components_1["default"].div(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  padding: 20px 0 2px 4px;\n  display: flex;\n  /* justify-content: space-between; */\n  padding-bottom: 4px;\n  vertical-align: bottom;\n"], ["\n  padding: 20px 0 2px 4px;\n  display: flex;\n  /* justify-content: space-between; */\n  padding-bottom: 4px;\n  vertical-align: bottom;\n"])));
var ChatMessageProfileName = styled_components_1["default"].p(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  color: #000000;\n  font-family: SpoqaHanSans;\n  font-size: 13px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 19px;\n"], ["\n  color: #000000;\n  font-family: SpoqaHanSans;\n  font-size: 13px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 19px;\n"])));
var ChatMessageBoxDiv = styled_components_1["default"].div(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n  width: 100%;\n  height: 80px;\n  display: flex;\n  position: relative;\n  bottom: 0;\n  border-top: 1px solid;\n  border-color: #d8d8d8;\n  background-color: white;\n"], ["\n  width: 100%;\n  height: 80px;\n  display: flex;\n  position: relative;\n  bottom: 0;\n  border-top: 1px solid;\n  border-color: #d8d8d8;\n  background-color: white;\n"])));
var ChatMessageClipDiv = styled_components_1["default"].div(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n  padding: 14px 14px 14px 14px;\n"], ["\n  padding: 14px 14px 14px 14px;\n"])));
var ChatMessageInputForm = styled_components_1["default"].form(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n  width: 80%;\n"], ["\n  width: 80%;\n"])));
var ChatMessageInput = styled_components_1["default"].input.attrs({ type: 'text' })(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n  margin: 15.5px;\n  margin-left: 0px;\n  padding: 15.5px;\n  width: 100%;\n  border: 1px solid #495057;\n  border-radius: 3px;\n  box-sizing: border-box;\n  font-family: SpoqaHanSans;\n  font-size: 14px;\n  letter-spacing: 0;\n  line-height: 24px;\n  ::placeholder {\n    color: #868e96;\n  }\n"], ["\n  margin: 15.5px;\n  margin-left: 0px;\n  padding: 15.5px;\n  width: 100%;\n  border: 1px solid #495057;\n  border-radius: 3px;\n  box-sizing: border-box;\n  font-family: SpoqaHanSans;\n  font-size: 14px;\n  letter-spacing: 0;\n  line-height: 24px;\n  ::placeholder {\n    color: #868e96;\n  }\n"])));
var FontAwesomeIconDiv = styled_components_1["default"](react_fontawesome_1.FontAwesomeIcon)(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n  padding: 16px;\n  background-color: #dddddddd;\n  border-radius: 10px;\n"], ["\n  padding: 16px;\n  background-color: #dddddddd;\n  border-radius: 10px;\n"])));
var ChatMessageProfileImg = styled_components_1["default"].img(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n  margin: 20px 0 20px 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 90px;\n"], ["\n  margin: 20px 0 20px 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 90px;\n"])));
var ChatMessageProfileDatetime = styled_components_1["default"].p(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n  margin-top: auto;\n  bottom: 0px;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  height: 15px;\n  color: #495057;\n  font-family: SpoqaHanSans;\n  font-size: 10px;\n  letter-spacing: 0;\n  line-height: 15px;\n"], ["\n  margin-top: auto;\n  bottom: 0px;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  height: 15px;\n  color: #495057;\n  font-family: SpoqaHanSans;\n  font-size: 10px;\n  letter-spacing: 0;\n  line-height: 15px;\n"])));
var ChatMessageText = styled_components_1["default"].pre(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n  padding-left: 4px;\n  padding-right: 4px;\n  color: #000000;\n  font-family: SpoqaHanSans;\n  font-size: 13px;\n  letter-spacing: 0;\n  line-height: 19px;\n"], ["\n  padding-left: 4px;\n  padding-right: 4px;\n  color: #000000;\n  font-family: SpoqaHanSans;\n  font-size: 13px;\n  letter-spacing: 0;\n  line-height: 19px;\n"])));
var ChatMessageCard = styled_components_1["default"].div(templateObject_27 || (templateObject_27 = __makeTemplateObject([""], [""])));
var SystemMessageLink = styled_components_1["default"].p(templateObject_28 || (templateObject_28 = __makeTemplateObject(["\n  padding: 0 0 11px 12px;\n  color: #212529;\n  font-family: SpoqaHanSans;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 18px;\n"], ["\n  padding: 0 0 11px 12px;\n  color: #212529;\n  font-family: SpoqaHanSans;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 18px;\n"])));
var MyChatMessageDiv = styled_components_1["default"](ChatMessageDiv)(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n  justify-content: flex-end;\n"], ["\n  justify-content: flex-end;\n"])));
var MyChatMessageCard = styled_components_1["default"](ChatMessageCard)(templateObject_30 || (templateObject_30 = __makeTemplateObject(["\n  justify-content: flex-end;\n"], ["\n  justify-content: flex-end;\n"])));
var MyChatMessageTitle = styled_components_1["default"](ChatMessageTitle)(templateObject_31 || (templateObject_31 = __makeTemplateObject(["\n  justify-content: flex-end;\n"], ["\n  justify-content: flex-end;\n"])));
var MyChatMessageText = styled_components_1["default"](ChatMessageText)(templateObject_32 || (templateObject_32 = __makeTemplateObject(["\n  text-align: right;\n"], ["\n  text-align: right;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32;
