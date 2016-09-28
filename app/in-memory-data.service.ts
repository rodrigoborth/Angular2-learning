export class InMemoryDataService {
  createDb() {
    let heroes = [
      {id: 1, name: 'Ashe'},
      {id: 2, name: 'Garen'},
      {id: 3, name: 'Annie'},
      {id: 4, name: 'Malzahar'},
      {id: 5, name: 'Xerath'},
      {id: 6, name: 'Varus'},
    ];
    return {heroes};
  }
}