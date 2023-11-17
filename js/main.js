const api_key = 'AIzaSyDwxSLXdnfN8bTNC5fnycohdatm0Qk4dLM';
const playlist_id = 'PLIenA9X9sYeiVsnUyEbb4wSLjTUiDSK8y';
const base_url = 'https://www.googleapis.com/youtube/v3/playlistItems';
const result_url = `${base_url}?part=snippet&key=${api_key}&playlistId=${playlist_id}&maxResults=5`;

/*
  GET 방식 : 브라우저 url을 통해서 데이터를 요청하는 방식 
  요청 url : 기본URL?name=value&name=value
  QueryString 방식 : 기본 요청 URL 뒤에 ? 뒷쪽으로 name=value 쌍으로 옵션값을 담아서 전달하는 방식
*/
