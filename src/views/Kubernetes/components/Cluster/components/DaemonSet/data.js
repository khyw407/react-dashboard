import moment from 'moment';

export default [
  {
    id: 1,
    name: 'kube-flannel-ds',
    namespace: 'kube-system',
    count: '4/4',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: 2,
    name: 'kube-proxy',
    namespace: 'kube-system',
    count: '4/4',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: 3,
    name: 'nvidia-gpu-device-plugin',
    namespace: 'kube-system',
    count: '0/0',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: 4,
    name: 'nvidia-gpu-device-plugin-1-8',
    namespace: 'kube-system',
    count: '0/0',
    updatedAt: moment().subtract(5, 'hours')
  }
];