export default {
  url: `${(process.env.PROXY_SERVER || 'https://zonky-server-cors.herokuapp.com/') + '/loans/marketplace?fields=amount'}`,
  ratings: [
    { id: 'AAAAA', name: 'A**' },
    { id: 'AAAA', name: 'A*' },
    { id: 'AAA', name: 'A++' },
    { id: 'AA', name: 'A+' },
    { id: 'A', name: 'A' },
    { id: 'B', name: 'B' },
    { id: 'C', name: 'C' },
    { id: 'D', name: 'D' },
  ],
}
