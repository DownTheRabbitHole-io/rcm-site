/* @flow */
import http from 'http';

export default class HomeService {
  // Define a unique identifier for the SampleService to avoid typo's when including it.
  static UID(): string{
    return "HomeService"
  }

  // With flowtype class variables can be defined with type.
  _data: string;

  /* @ngInject */
  constructor($http) {
    this.$http = $http;
    /// Service properties are defined in the constructor with this.
    this._data = "Welcome to the sample";
    this.loadData();
  }

  /**
   * With flowtype the return type can be defined.
   * @return {[type]}
   */
  get data(): string{
    return this._data;
  }


  loadData(http){
    var req = {};
    req = {
      method: 'GET',
      url: require('file!./json/pageData.json')
    };
    this._data = this.$http(req);
  }



}
