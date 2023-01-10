import { createAsyncThunk } from '@reduxjs/toolkit';

import { getCard } from '../../api/card.api';

export const fetchCard = createAsyncThunk('card/data', getCard);
