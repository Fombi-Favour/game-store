import detailsSlice, { fetchGames, initialState } from '../redux/details/detailsSlice';

describe('testing details slice', () => {
  it('should update games when fetchGames is fulfilled', () => {
    const payload = [{
      id: 1, title: 'game 1', image: 'image 1', deal: 120,
    }];
    const action = { type: fetchGames.fulfilled.type, payload };
    const state = detailsSlice(initialState, action);
    expect(state.games).toEqual(payload);
  });
});
