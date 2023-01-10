import request from './request';

type CardDataType = {
  searchValue: string;
  page: string;
  per_page: string;
  options: string;
};

export const getCard = async (cardData: CardDataType) => {
  const response = await request.get('', {
    params: {
      method: 'flickr.photos.search',
      api_key: 'a778f5f71d120326ac7b450df7a9c85e',
      tag_mode: 'all',
      extras: 'url_m',
      format: 'json',
      nojsoncallback: '1',
      tags: cardData.searchValue,
      page: cardData.page,
      per_page: cardData.per_page,
      sort: cardData.options,
    },
  });

  return response.data;
};
