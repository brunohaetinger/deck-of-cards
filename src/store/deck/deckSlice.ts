import { createSlice, createAsyncThunk, Slice } from "@reduxjs/toolkit";
import { client } from "../../api/client";
import { RootState } from "../store";
import { CardType, DeckState } from "./types";

const DECK_API = "https://deckofcardsapi.com/api/deck";

const initialState: DeckState = {
  isLoading: false,
  error: null,
  deckId: "",
  rotationCard: null,
  pile: [],
};

export const createDeck = createAsyncThunk("deck/createDeck", async () => {
  const response = await client.get(`${DECK_API}/new/shuffle/?deck_count=1`);
  return response;
});

const deckSlice: Slice<DeckState, {}, "deck"> = createSlice({
  name: "deck",
  initialState,
  reducers: {
    pileAdded(state: DeckState, action: { payload: CardType }) {
      const { value, suit } = action.payload;
      const pileContainsCard = state.pile.some(
        (c: CardType) => c.value === value && c.suit === suit
      );
      if (!pileContainsCard) {
        state.pile = [...state.pile, { value, suit }];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createDeck.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(createDeck.fulfilled, (state, { payload }) => {
      state.deckId = payload.deck_id;
      state.isLoading = false;
    });
    builder.addCase(createDeck.rejected, (state) => {
      state.deckId = "";
      state.isLoading = false;
      state.error = "Error on creating deck";
    });
  },
});

export default deckSlice.reducer;

export const selectDeck = (state: RootState) => state.deck;
