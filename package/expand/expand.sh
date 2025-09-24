#!/bin/bash
set -x

# 检测是否存在 /root/firstboot 文件
check_firstboot() {
  if [ -f "/root/firstboot" ]; then
    echo "Found /root/firstboot file. Resizing mmcblk0p3 partition..."
    resize_mmcblk0p3
    # 删除 /root/firstboot 文件
    rm -f "/root/firstboot"
  else
    echo "No /root/firstboot file found. Skipping partition resizing."
  fi
}

# 扩展 mmcblk0p3 分区

resize_mmcblk0p3() {
  echo "Resizing mmcblk0p3 partition..."
  umount /dev/mmcblk0p3
  parted -s /dev/mmcblk0 resizepart 3 100%
  e2fsck -fy /dev/mmcblk0p3
  resize2fs /dev/mmcblk0p3
  mount /dev/mmcblk0p3
  echo "mmcblk0p3 partition resized successfully."
}


echo "Starting partition resizing..."

# 检测并执行扩容操作
check_firstboot

echo "Partition resizing completed."

cat /dev/null > ~/.bash_history
