import moment from 'moment';

export default [
  {
    id: 1,
    name: 'kube-system',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: 2,
    name: 'kubernetes-dashboard',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: 3,
    name: 'kube-public',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: 4,
    name: 'kube-system',
    updatedAt: moment().subtract(5, 'hours')
  }
];