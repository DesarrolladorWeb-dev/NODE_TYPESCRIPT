"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const types_1 = require("./types");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseComment = (commentFromRequest) => {
  if (!isString(commentFromRequest)) {
    throw new Error("Incorrect or missing comment");
  }
  return commentFromRequest;
};
const parseDate = (dateFromRequest) => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error("Incorrect or missiong date");
  }
  return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error("Incorrect or missiong Weather");
  }
  return weatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
  if (
    !isString(visibilityFromRequest) ||
    !isVisibility(visibilityFromRequest)
  ) {
    throw new Error("Incorrect or missing Visibility");
  }
  return visibilityFromRequest;
};
const isWeather = (param) => {
  // que te incluya el parametro que quieres ver
  return Object.values(types_1.Weather).includes(param);
};
const isString = (string) => {
  return typeof string === "string";
};
const isDate = (date) => {
  return Boolean(Date.parse(date));
};
const isVisibility = (param) => {
  return Object.values(types_1.Visibility).includes(param);
};
const toNewDiaryEntry = (object) => {
  const newEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
  };
  return newEntry;
};
exports.default = toNewDiaryEntry;
