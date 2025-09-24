#!/bin/bash

set -x

# touch firstboot file
touch /root/firstboot

# clean history command
history -c && history -w

