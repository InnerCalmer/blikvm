/*****************************************************************************
* | File        :   OLED_0in96_test.c
* | Author      :   Waveshare team
* | Function    :   OLED_0in96 OLED Module test demo
* | Info        :
*----------------
* | This version:   V2.0
* | Date        :   2020-08-14
* | Info        :
* -----------------------------------------------------------------------------
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documnetation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to  whom the Software is
# furished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS OR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.
#
******************************************************************************/
#include "ssd1306_oled.h"
#include "OLED_0in96.h"
#include "common/blikvm_util/blikvm_util.h"
#include<time.h>
#include<string.h> 

#define TAG "OLED"

int OLED_0in96_test(void)
{
    
    if(DEV_ModuleInit() != 0) 
    {
        BLILOG_E(TAG,"0.96inch OLED init failed\n");
        return -1;
    }
    BLILOG_D(TAG,"0.96inch OLED init ok\n");
    OLED_0in96_Init();
    DEV_Delay_ms(500);  
    // 0.Create a new image cache
    UBYTE *BlackImage;
    UWORD Imagesize = ((OLED_0in96_WIDTH%8==0)? (OLED_0in96_WIDTH/8): (OLED_0in96_WIDTH/8+1)) * OLED_0in96_HEIGHT;
    BLILOG_D(TAG,"Imagesize:%d\n",Imagesize);
    if((BlackImage = (UBYTE *)malloc(Imagesize)) == NULL) 
    {
        BLILOG_E(TAG,"Failed to apply for black memory...\n");
        return -1;
    }
    Paint_NewImage(BlackImage, OLED_0in96_WIDTH, OLED_0in96_HEIGHT, 90, BLACK);  

    //1.Select Image
    Paint_SelectImage(BlackImage);
    DEV_Delay_ms(500);
    Paint_Clear(BLACK);
    while(1)
    {        
        // IP address
        char ip[20]={0};
        GetIP(ip);
        char ip_str[128]={0};
        sprintf(ip_str,"IP:%s",ip);
        Paint_DrawString_EN(0, 0, ip_str, &Font12, WHITE, WHITE);

        // TEMP
        char temp[20]={0};
        sprintf(temp, "temp:%2dF/%2dC",(int)(GetCPUTemp()*1.8 + 32),GetCPUTemp());
        Paint_DrawString_EN(0, 12, temp, &Font12, WHITE, WHITE);

        // CPU LOAD
        char cpu_loading[20]={0};
        sprintf(cpu_loading, "CPU LOAD:%.2f",GetCPULoad());
        Paint_DrawString_EN(0, 24, cpu_loading, &Font12, WHITE, WHITE);

        //Mem 
        char mem[20]={0};
        GetMemUsage(mem);
        char mem_str[28]={0};
        sprintf(mem_str,"Disk:%s",mem);
        Paint_DrawString_EN(0, 36, mem_str, &Font12, WHITE, WHITE);

        OLED_0in96_display(BlackImage);
        DEV_Delay_ms(3000); 
        Paint_Clear(BLACK);   

    }
}
