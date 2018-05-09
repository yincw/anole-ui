var startMenuLinkUnInstall

!macro setUninstallLinkVars
  !ifdef MENU_FILENAME
    StrCpy $startMenuLinkUnInstall "$SMPROGRAMS\${MENU_FILENAME}\卸载 ${PRODUCT_FILENAME}.lnk"
  !else
  StrCpy $startMenuLinkUnInstall "$SMPROGRAMS\卸载 ${PRODUCT_FILENAME}.lnk"
  !endif
!macroend

!macro customInit
  !insertmacro "setUninstallLinkVars"
!macroend

!macro customInstall
  # 添加 程序信息（帮助链接、更新信息链接、支持链接、备注） 到 卸载及更改程序列
  WriteRegStr SHCTX "${UNINSTALL_REGISTRY_KEY}" "HelpLink" ""
  WriteRegStr SHCTX "${UNINSTALL_REGISTRY_KEY}" "URLUpdateInfo" ""
  WriteRegStr SHCTX "${UNINSTALL_REGISTRY_KEY}" "URLInfoAbout" ""
  WriteRegStr SHCTX "${UNINSTALL_REGISTRY_KEY}" "Comments" ""
  WriteRegStr SHCTX "${UNINSTALL_REGISTRY_KEY}" "DisplayIcon" "$appExe,0"
  # 添加 信息(图标和名称) 到 右键菜单
  # WriteRegStr HKCU "SOFTWARE\Classes\directory\shell\${PRODUCT_FILENAME}" "Icon" "$\"$appExe$\""
  # WriteRegStr HKCU "SOFTWARE\Classes\directory\shell\${PRODUCT_FILENAME}" "" "Open with ${PRODUCT_FILENAME}"
  # WriteRegStr HKCU "SOFTWARE\Classes\directory\shell\${PRODUCT_FILENAME}\command" "" "$\"$appExe$\" $\"%1$\""
  # WriteRegStr HKCU "SOFTWARE\Classes\directory\background\shell\${PRODUCT_FILENAME}" "Icon" "$\"$appExe$\""
  # WriteRegStr HKCU "SOFTWARE\Classes\directory\background\shell\${PRODUCT_FILENAME}" "" "Open with ${PRODUCT_FILENAME}"
  # WriteRegStr HKCU "SOFTWARE\Classes\directory\background\shell\${PRODUCT_FILENAME}\command" "" "$\"$appExe$\" $\"%V$\""
  # 添加 卸载程序信息 到 开始菜单快捷方式
  CreateShortCut "$startMenuLinkUnInstall" "$INSTDIR\${UNINSTALL_FILENAME}" "" "$INSTDIR\uninstallerIcon.ico" 0 "" "" ""
!macroend

!macro customUnInit
  !insertmacro "setUninstallLinkVars"
!macroend

!macro customUnInstall
  WinShell::UninstShortcut "$startMenuLinkUnInstall"
  Delete "$startMenuLinkUnInstall"

  # DeleteRegKey HKCU "SOFTWARE\Classes\directory\shell\${PRODUCT_FILENAME}"
  # DeleteRegKey HKCU "SOFTWARE\Classes\directory\background\shell\${PRODUCT_FILENAME}"
!macroend
