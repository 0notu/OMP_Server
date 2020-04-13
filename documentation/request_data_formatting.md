```js
data.query = {
  token: // encrypted token, session id as salt
  type: [game_update, purchase, chat], // types are subject to change
  public: {
    status: [idle, in_game, in_shop, invisible],
    game: {
      damage_done: 0, // some int
      time_elapsed: 0, // some int
      game_mode: [pink_slip, tdm, competitive, practice],
      party: 0, // some int out of four
    }
  },
  private: {
    chat: {
      time: 0, // data_time
      content: "" // chat content
    },

  }
}
```
