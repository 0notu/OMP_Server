```js
data.query = {
  token: "abc", // user's token, validates all requests
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
    party_token: "abc", // this is used to group users into games
    chat: {
      time: 0, // date-time
      content: "" // chat content
    },

  }
}
```
