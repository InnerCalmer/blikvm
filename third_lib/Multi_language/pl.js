export default {
    i:{
        modal:{
            okText:'OK',
            cancelText:'Anuluj',
        }
    },
    message:{
        offline:'Uwaga: Urządzenie niepołączone, sprawdź sieć!',
        delay:'przeglądarka do urządzenia',
        video_size:'Ekran jest domyślnie dopasowany do okna, ale może to podowować złe proporcje. Jeżeli efekt jest nieodpowiedni, możesz poniżej zmienić ustawienia.',
        update_content:'Jest dostępna aktualizacja. Możesz ją wykonać poprzez terminal (SSH).',
        update_doing:'Aktualizuję, proszę odświeżyć przeglądarkę za kilka minut',
        update_success:'Aktualizacja wykonana.',
        update_fail:'Aktualizacja nieudana, prosze spróbować ponownie',
        password_warn:"Co najmniej 8-znakowe hasło, różnice wielkości liter są uwzględniane",
        strength:"Siła",
        password_tips:"Prosze wpisać co najmniej 8 znaków. Proszę nie używać łatwych haseł.",
        confirm_password:"Potwierdź hasło",
        short:"Słabe",
        middle:"Średnie",
        long:"Silne",
        change_success:"Zmiana udana. Prosze zrestartować BLIKVM by zobaczyć zmiany",
        change_fail:"Zmiana nieudana.",
        password_not_same:"Ponownie wpisane hasło nie pasuje!",
        password_empty:"Hasło nie może być puste",
        confirm_password_empty:"Potwierdź puste hasło",
        password_less_eight:"Hasło nie może mieć mniej niż 8 znaków",
        username_and_password_error:"Błąd Użytkownika/hasła",
        login_tips:"Proszę się zalogować by korzystać z BLIKVM",
        username_info:"Proszę wpisać nazwę użytkownika",
        password_info:"Proszę wpisać hasło",
        select_type:"Wybierz Typ",
        prepare_file:"Przygotuj Plik",
        prepare_work:"Przygotuj Zadanie",
        select_work:"Wybierz Zadanie",
        common_usb_drive:"Standardowy napęd USB",
        system_usb_drive:"Uruchamialny napęd USB",
        avail_space:"Dostępne",
        total_space:"Łącznie",
        select_or_upload_image:"Wybierz i wgraj obraz dysku",
        select_image:"Proszę wybrać obraz dysku",
        make_message:"Proszę nacisnąć przycisk utwórz (poniżej) w celu wygenerowania uruchamialnego napędu USB, i zaczekać zakończenie konwersji oraz kopiowania przed kontynuowaniem (trwa to długo i zajmuje dużo czasu, proszę cierpliwie czekać).",
        usb_drive_size:"objętość napędu USB",
        conversion_progress:"postęp konwersji",
        copy_progress:"postęp kopiowania",
        usb_drive_manager:"Zarządzanie napędem USB",
        selected_image:"Wybrany obraz dysku",
        uploading:"wygrywanie",
        upload_success:"wgrywanie zakończone sukcesem",
        no_file_selected:"Jeszcze nie wybrano pliku",
        command_sub_success:"Polecenie przesłane pomyślnie",
        merger_image:"Plik jest w trakcie łączenia, proszę nie zamykać strony",
        wake_on_lan_info:"Warunki działania wybudzenia (WoL): KVM i sterowany komputer muszą być w tej samej sieci lokalnej. Kontrolowany komputer musi mieć wsparcie, oraz uaktywnioną i skonfigurowaną funkcję Wake on LAN. Format adresu MAC powinien odpowiadać wzorcowi: 1a:2b:3c:4d:5e:6f lub e7-f8-90-0a-1b.",
        mac_address_info:"Wpisz adres MAC komputera docelowego",
        operation_success:"Operacja wykonana pomyślnie",
        operation_failed:"Operacja nie powiodła się. Spróbuj ponownie",
        mac_address_error:"Wpisany adres MAC ma zły format zapisu",
        keyboard_copy_alert:"Obecnie obsługuje tylko język Angielski, inne języki (znaki diakrytyczne) nie są obsługiwane.",
        input_info:"Proszę wpisać zawartość",
        input_blank:"Zawartość nie może byc pusta",
    },
    menu:{
        turn_on_fan:'Uruchom chłodzenie',
        turn_off_fan:'Zatrzymaj chłodzenie',
        atx_no_connect:'Nieaktywne',
        atx_poweron:'Włącz',
        atx_poweroff:'Wyłącz',
        atx_forceoff:'WymuśWył',
        atx_reset:'Resetuj',
        virtual_keyboard:'Klawiatura',
        full_screen:'Pełny Ekran',
        more:'Więcej',
        video_settings:'Ustawienia Video',
        default:'Domyślne',
        reset_confirm:{
            title:'Ostrzeżenie bezpieczeństwa działania',
            content:'Urządzenie, które kontrolujesz może się zrestartować. Czy na pewno chcesz wykonać operację?'
        },
        atx_no_connect_message:'Przewody ATX nie podłączone!',
        version:'Informacje o Wersji',
        kvm_switch:"Przełącznik BliKVM",
        switch_channel1:"Kanał 01",
        switch_channel2:"Kanał 02",
        switch_channel3:"Kanał 03",
        switch_channel4:"Kanał 04",
        about_cmp:"O urządzeniu",
        check_update:"Sprawdź Dostępność Aktualizacji",
        reboot_kvm:"Restartuj KVM",
        usermanager:"Zarządzanie Użytkownikami",
        change_user_pass:"Zmień nazwę użytkownika lub hasło",
        make_image:"Utwórz",
        connect_image:"Podłącz nowy dysk z hostem",
        abort_image:"Przerwij operację",
        delete_image:"Usuń obraz",
        click_upload:"Naciśnij aby wgrać",
        pre_step:"Wstecz",
        next_step:"Dalej",
        select_file:"Wybierz plik",
        submit:"Prześlij",
        logout:"Wyloguj",
    }
}