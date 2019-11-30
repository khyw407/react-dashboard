import moment from 'moment';

export default [
  {
    id: 1,
    name: 'kube-dns',
    namespace: 'kube-system',
    count: '4/4',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: 2,
    name: 'kube-dns-autoscaler',
    namespace: 'kube-system',
    count: '1/1',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: 3,
    name: 'kubernetes-dashboard',
    namespace: 'kube-system',
    count: '1/1',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: 4,
    name: 'tiller-deploy',
    namespace: 'kube-system',
    count: '1/1',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: 5,
    name: 'kubernetes-metrics-scraper',
    namespace: 'kube-system',
    count: '1/1',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: 6,
    name: 'influx',
    namespace: 'kube-system',
    count: '1/1',
    updatedAt: moment().subtract(5, 'hours')
  }
];