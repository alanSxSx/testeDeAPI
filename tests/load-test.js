import http from 'k6/http';
import { check, sleep } from 'k6';

const API_URL = 'http://localhost:3000';
const ALEATORIO = Math.floor(Math.random() * 1000);

export function setup() {
  const res = http.get(API_URL + '/users');
  const users = res.json();
  const userIds = users.map(user => user.name);
  console.log(`Número inicial de usuários: ${userIds.length}`);
  return userIds.length;
}

export const options = {
  stages: [
    { duration: '5s', target: 100 },
    { duration: '10s', target: 100 },
    { duration: '5s', target: 0 },
  ],
};

export default function () {
  const payload = JSON.stringify({
    name: `User ${ALEATORIO}`,
    email: `user${ALEATORIO}@example.com`,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(API_URL + '/users', payload, params);

  check(res, {
    'status é 201': (r) => r.status === 201,
    'tempo de resposta está abaixo de 2s': (r) => r.timings.duration < 2000,
  });

  const usersRes = http.get(API_URL + '/users');
  const users = usersRes.json();
  const userIds = users.map(user => user.name);
  console.log(`Número de usuários após inserção: ${userIds.length}`);

  sleep(1);

}

export function teardown() {
  const resetRes = http.post(API_URL + '/reset');
  console.log(`API resetada para o estado inicial: ${resetRes.status}`);
}
