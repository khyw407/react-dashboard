export default [
    {
      id: 1,
      name: 'kube-flannel-ds',
      label: 'app:flanneltier:node',
      pod: '4/4',
      creationTimestamp: '2019-10-16 05:10:39',
      image: 'icn.ocir.io/odx-oke/oke-public/flannel:v0.10.0-amd64'
    },
    {
      id: 2,
      name: 'kube-proxy',
      label: 'k8s-app:kube-proxy',
      pod: '4/4',
      creationTimestamp: '2019-10-16 05:10:36',
      image: 'icn.ocir.io/odx-oke/oke-public/kube-proxy:v1.13.5'
    },
    {
      id: 3,
      name: 'nvidia-gpu-device-plugin',
      label: 'addonmanager.kubernetes.io/mode:Reconcilek8s-app:nvidia-gpu-device-plugin',
      pod: '0/0',
      creationTimestamp: '2019-10-16 05:10:38',
      image: 'iad.ocir.io/odx-oke/oke-public/nvidia-gpu-device-plugin@sha256:0842734032018be107fa2490c98156992911e3e1f2a21e059ff0105b07dd8e9e'
    },
    {
      id: 4,
      name: 'nvidia-gpu-device-plugin-1-8',
      label: 'addonmanager.kubernetes.io/mode:Reconcilek8s-app:nvidia-gpu-device-plugin-1-8',
      pod: '4/4',
      creationTimestamp: '2019-10-16 05:10:39',
      image: 'iad.ocir.io/odx-oke/oke-public/device-plugin-gpu@sha256:3638bb2df2684a7f3fed56a2c038fee90cf217aeabcdec7a098ef9ca942b68a1'
    }
];