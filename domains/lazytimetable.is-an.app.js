addSubDomain({
    description: 'A timetable management web application',
    domain: 'is-an.app',
    subdomain: 'lazytimetable',
    owner: {
      email: 'pikapikapickle2@gmail.com',
    },
    record: {
      A: ['90.246.30.152'],
    },
    proxy: false, // Disable Cloudflare proxy since you're specifying an IP address
  })
  