$files = Get-ChildItem -Path "src" -Recurse -Include "*.tsx","*.ts"
foreach ($file in $files) {
    (Get-Content $file.FullName) | 
    ForEach-Object { $_ -replace 'from "@/components/', 'from "../../components/' } |
    Set-Content $file.FullName
}
