import http from 'k6/http';

export const options = {
  scenarios: {
    Simple: {
      executor: 'shared-iterations',
      vus: 5,
      iterations: 10,
      maxDuration: '30s',
      },
  },
};

export default function () {
  http.get('http://test.k6.io');
}
