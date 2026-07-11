const TOOLS_DATA = [
  // CTF Tools
  {
    name: "pwntools",
    category: "CTF Tools",
    subcategory: "Exploitation Framework",
    url: "https://github.com/Gallopsled/pwntools",
    description: "A CTF framework and exploit development library written in Python, designed for rapid prototyping and development.",
    tags: ["Python", "Exploitation", "CTF", "Pwn"]
  },
  // Reverse Engineering
  {
    name: "peda",
    category: "Reverse Engineering",
    subcategory: "GDB Assistant",
    url: "https://github.com/longld/peda",
    description: "Python Exploit Development Assistance for GDB. Enhances GDB display with colorization, command shortcuts, and exploit helpers.",
    tags: ["Python", "GDB", "Debugging", "Exploit-Dev"]
  },
  {
    name: "plasma",
    category: "Reverse Engineering",
    subcategory: "Disassembler",
    url: "https://github.com/joelpx/plasma",
    description: "Interactive disassembler for x86/ARM/MIPS. Generates pseudo-code with colored syntax and dynamic navigation.",
    tags: ["C++", "Disassembler", "ARM", "x86"]
  },
  {
    name: "radare2",
    category: "Reverse Engineering",
    subcategory: "Recon & Analysis",
    url: "https://github.com/radare/radare2",
    description: "A complete, portable, multi-architecture reverse engineering framework and command-line toolkit.",
    tags: ["C", "Disassembler", "Hex-Editor", "Debugger"]
  },
  {
    name: "x64dbg",
    category: "Reverse Engineering",
    subcategory: "Windows Debugger",
    url: "https://github.com/x64dbg/x64dbg",
    description: "An open-source x64/x32 debugger for Windows, focusing on malware analysis and executable binary modification.",
    tags: ["C++", "Debugger", "Windows", "Malware"]
  },
  {
    name: "edb-debugger",
    category: "Reverse Engineering",
    subcategory: "Modular Debugger",
    url: "https://github.com/eteran/edb-debugger",
    description: "A cross-platform modular debugger utilizing Qt, designed for usability and binary reverse engineering.",
    tags: ["C++", "Qt", "Debugger", "Linux", "Windows"]
  },
  {
    name: "dex2jar",
    category: "Reverse Engineering",
    subcategory: "Android Decompiler",
    url: "https://github.com/pxb1988/dex2jar",
    description: "Utilities to read and convert Android Dalvik Executable (.dex) files into standard Java class files.",
    tags: ["Java", "Android", "Decompiler", "APK"]
  },
  {
    name: "jd-gui",
    category: "Reverse Engineering",
    subcategory: "Java Decompiler",
    url: "https://github.com/java-decompiler/jd-gui",
    description: "Graphical user interface utility that displays Java source codes of Compiled .class files.",
    tags: ["Java", "Decompiler", "GUI"]
  },
  {
    name: "upx",
    category: "Reverse Engineering",
    subcategory: "Binary Packer",
    url: "https://github.com/upx/upx",
    description: "The Ultimate Packer for eXecutables. High-performance executable file compressor for multiple formats.",
    tags: ["C++", "Compression", "Packer", "Binary"]
  },
  {
    name: "voltron",
    category: "Reverse Engineering",
    subcategory: "Debugger UI",
    url: "https://github.com/snare/voltron",
    description: "An extensible debugger UI utility for hackers. Plugs into GDB, LLDB, WinDbg, and more to display status screens.",
    tags: ["Python", "GDB", "LLDB", "CLI"]
  },
  {
    name: "mona",
    category: "Reverse Engineering",
    subcategory: "Exploit Helper",
    url: "https://github.com/corelan/mona",
    description: "Immunity Debugger and WinDbg plugin designed to automate exploit writing tasks (structured exception handlers, bad chars).",
    tags: ["Python", "Exploit-Dev", "WinDbg", "Assembly"]
  },
  // Network Sniffing & Analysis
  {
    name: "moloch",
    category: "Network Security",
    subcategory: "Packet Capture",
    url: "https://github.com/aol/moloch",
    description: "Large scale IPv4 packet capturing (PCAP), indexing, and database system with web dashboard interface.",
    tags: ["Node.js", "C", "PCAP", "Sniffer", "Elasticsearch"]
  },
  {
    name: "netsniff-ng",
    category: "Network Security",
    subcategory: "High-Performance Sniffer",
    url: "https://github.com/netsniff-ng/netsniff-ng",
    description: "Zero-copy analyzer, packet sniffer, and network utility suite for highly efficient Linux network operations.",
    tags: ["C", "Sniffer", "Linux", "Low-Level"]
  },
  {
    name: "yersinia",
    category: "Network Security",
    subcategory: "Protocol Auditor",
    url: "https://github.com/tomac/yersinia",
    description: "Network security tool designed to audit, stress test, and attack network protocols like DHCP, STP, CDP, and HSRP.",
    tags: ["C", "Protocols", "Auditing", "Layer2"]
  },
  {
    name: "scapy",
    category: "Network Security",
    subcategory: "Packet Manipulation",
    url: "https://github.com/secdev/scapy",
    description: "A powerful Python-based interactive packet manipulation program, generator, sniffer, and scanner.",
    tags: ["Python", "PCAP", "Packet-Crafting", "Scanner"]
  },
  {
    name: "bro-ids",
    category: "Network Security",
    subcategory: "Network Analysis",
    url: "https://github.com/bro/bro",
    description: "A powerful network analysis framework (Zeek) focusing on security monitoring and behavior analysis.",
    tags: ["C++", "IDS", "Traffic-Analysis", "Logging"]
  },
  // Penetration Testing - Exploiting
  {
    name: "metasploit-framework",
    category: "Penetration Testing",
    subcategory: "Exploitation Framework",
    url: "https://github.com/rapid7/metasploit-framework",
    description: "The world's most widely used penetration testing framework. Provides exploit development, payloads, and post-exploitation modules.",
    tags: ["Ruby", "Exploitation", "Scanner", "Payloads", "Post-Exploitation"]
  },
  {
    name: "beef",
    category: "Penetration Testing",
    subcategory: "Web Exploitation",
    url: "https://github.com/beefproject/beef",
    description: "Browser Exploitation Framework focusing on assessing the web browser security posture via client-side vectors.",
    tags: ["Ruby", "JavaScript", "Browsers", "Client-Side"]
  },
  {
    name: "PowerSploit",
    category: "Penetration Testing",
    subcategory: "Active Directory & Windows",
    url: "https://github.com/PowerShellMafia/PowerSploit",
    description: "A collection of Microsoft PowerShell modules that can be used to aid penetration testers in Windows environments.",
    tags: ["PowerShell", "Active-Directory", "Post-Exploitation", "Windows"]
  },
  {
    name: "commix",
    category: "Penetration Testing",
    subcategory: "OS Command Injection",
    url: "https://github.com/commixproject/commix",
    description: "Automated All-in-One OS command injection and exploitation tool designed to find injection vulnerabilities in web requests.",
    tags: ["Python", "Exploitation", "Web", "CLI"]
  },
  {
    name: "Windows-Exploit-Suggester",
    category: "Penetration Testing",
    subcategory: "Privilege Escalation",
    url: "https://github.com/GDSSecurity/Windows-Exploit-Suggester",
    description: "Compares a target's operating system patch level against the Microsoft vulnerability database to detect missing patches.",
    tags: ["Python", "Scanner", "Audit", "Windows"]
  },
  {
    name: "Linux_Exploit_Suggester",
    category: "Penetration Testing",
    subcategory: "Privilege Escalation",
    url: "https://github.com/PenturaLabs/Linux_Exploit_Suggester",
    description: "Assesses potential local privilege escalation vulnerabilities in Linux systems by analyzing operating system details and kernel version.",
    tags: ["Shell", "Kernel", "Audit", "Linux"]
  },
  {
    name: "exploit-database",
    category: "Penetration Testing",
    subcategory: "Exploit Archive",
    url: "https://github.com/offensive-security/exploit-database",
    description: "An archive of public exploits and corresponding vulnerable software, developed for use by penetration testers and researchers.",
    tags: ["Shell", "Database", "Exploits", "ExploitDB"]
  },
  // Penetration Testing - Password Cracking
  {
    name: "hashcat",
    category: "Penetration Testing",
    subcategory: "Password Cracking",
    url: "https://github.com/hashcat/hashcat",
    description: "The world's fastest and most advanced password recovery utility, supporting GPU acceleration and multiple hashing algorithms.",
    tags: ["C", "GPU", "Cracker", "Passwords"]
  },
  {
    name: "JohnTheRipper",
    category: "Penetration Testing",
    subcategory: "Password Cracking",
    url: "https://github.com/magnumripper/JohnTheRipper",
    description: "A fast, open-source password cracker, supporting dictionary attacks, brute-forcing, and custom rules on unix formats.",
    tags: ["C", "CLI", "Cracker", "Passwords"]
  },
  {
    name: "thc-hydra",
    category: "Penetration Testing",
    subcategory: "Network Authentication",
    url: "https://github.com/vanhauser-thc/thc-hydra",
    description: "A very fast network logon cracker which supports numerous protocols including SSH, FTP, HTTP, Telnet, SMB, and databases.",
    tags: ["C", "Cracker", "Network", "Logon"]
  },
  // Penetration Testing - Info Gathering
  {
    name: "dnsrecon",
    category: "Penetration Testing",
    subcategory: "DNS Enumeration",
    url: "https://github.com/darkoperator/dnsrecon",
    description: "DNS Enumeration script that checks for zone transfers, wildcard resolution, DNS records, subdomains, and SRV lookups.",
    tags: ["Python", "DNS", "Recon", "Information-Gathering"]
  },
  {
    name: "dnsenum",
    category: "Penetration Testing",
    subcategory: "DNS Enumeration",
    url: "https://github.com/fwaeytens/dnsenum",
    description: "Multithreaded perl script to enumerate DNS information of a domain and discover non-contiguous ip blocks.",
    tags: ["Perl", "DNS", "Recon", "Information-Gathering"]
  },
  {
    name: "subbrute",
    category: "Penetration Testing",
    subcategory: "Subdomain Discovery",
    url: "https://github.com/TheRook/subbrute",
    description: "A subdomain brute-forcing tool that uses open resolvers as a proxy to bypass rate-limiting restrictions.",
    tags: ["Python", "Recon", "DNS", "Subdomain"]
  },
  {
    name: "knock",
    category: "Penetration Testing",
    subcategory: "Subdomain Scanner",
    url: "https://github.com/guelfoweb/knock",
    description: "Subdomain scanner designed to discover subdomains on a target domain using a wordlist and DNS query operations.",
    tags: ["Python", "Recon", "Subdomain", "DNS"]
  },
  {
    name: "smbmap",
    category: "Penetration Testing",
    subcategory: "SMB Enumeration",
    url: "https://github.com/ShawnDEvans/smbmap",
    description: "Handy SMB share enumeration tool that allows users to quickly inspect drive permissions and upload/download files.",
    tags: ["Python", "SMB", "Recon", "Active-Directory"]
  },
  {
    name: "ivre",
    category: "Penetration Testing",
    subcategory: "Network Mapping",
    url: "https://github.com/cea-sec/ivre",
    description: "Network reconnaissance framework that integrates Nmap, ZMap, Masscan, and database storage to analyze network spaces.",
    tags: ["Python", "OSINT", "Network-Mapping", "Web"]
  },
  // Penetration Testing - Web Security
  {
    name: "zaproxy",
    category: "Penetration Testing",
    subcategory: "Web App Scanner",
    url: "https://github.com/zaproxy/zaproxy",
    description: "OWASP Zed Attack Proxy (ZAP) is a popular, free, open-source tool for finding security vulnerabilities in web applications.",
    tags: ["Java", "Web", "Scanner", "Proxy", "Vulnerability-Scanner"]
  },
  {
    name: "sqlmap",
    category: "Penetration Testing",
    subcategory: "SQL Injection",
    url: "https://github.com/sqlmapproject/sqlmap",
    description: "Automated SQL injection and database takeover tool. Supports direct database connection and exploitation of web apps.",
    tags: ["Python", "Database", "Exploitation", "Web"]
  },
  {
    name: "wpscan",
    category: "Penetration Testing",
    subcategory: "WordPress Scanner",
    url: "https://github.com/wpscanteam/wpscan",
    description: "Black box WordPress security scanner to check for vulnerable plugins, core vulnerabilities, and theme flaws.",
    tags: ["Ruby", "WordPress", "Web", "Scanner"]
  },
  {
    name: "nikto",
    category: "Penetration Testing",
    subcategory: "Web Server Scanner",
    url: "https://github.com/sullo/nikto",
    description: "A web server scanner that tests web servers for multiple items, including dangerous files, CGI scripts, and outdated software.",
    tags: ["Perl", "Web-Server", "Scanner", "SSL"]
  },
  {
    name: "arachni",
    category: "Penetration Testing",
    subcategory: "Web App Scanner",
    url: "https://github.com/Arachni/arachni",
    description: "High-performance Web Application Security Scanner Framework. Emulates complex user workflows to find vulnerabilities.",
    tags: ["Ruby", "Scanner", "Web", "HTML5"]
  },
  {
    name: "weevely3",
    category: "Penetration Testing",
    subcategory: "Web Shell",
    url: "https://github.com/epinna/weevely3",
    description: "Weaponized web shell designed for post-exploitation on web servers. Provides stealthy remote terminal execution.",
    tags: ["Python", "Post-Exploitation", "Web-Shell", "PHP"]
  },
  {
    name: "NoSQLMap",
    category: "Penetration Testing",
    subcategory: "NoSQL Injection",
    url: "https://github.com/tcstool/NoSQLMap",
    description: "Automated MongoDB and NoSQL database takeover tool, scanning for default configurations and injection vectors.",
    tags: ["Python", "NoSQL", "Database", "MongoDB"]
  },
  // Penetration Testing - Post Exploitation, MITM & Wireless
  {
    name: "mimikatz",
    category: "Penetration Testing",
    subcategory: "Credentials Dumping",
    url: "https://github.com/gentilkiwi/mimikatz",
    description: "Windows credentials recovery tool. Extracts plain-text passwords, hashes, PINs, and Kerberos tickets from LSASS memory.",
    tags: ["C", "Windows", "Credentials", "Post-Exploitation"]
  },
  {
    name: "Empire",
    category: "Penetration Testing",
    subcategory: "Post-Exploitation Agent",
    url: "https://github.com/adaptivethreat/Empire",
    description: "PowerShell and Python post-exploitation agent framework, providing secure communication channels and modules.",
    tags: ["Python", "PowerShell", "Command-and-Control", "Post-Exploitation"]
  },
  {
    name: "mitmproxy",
    category: "Penetration Testing",
    subcategory: "Intercepting Proxy",
    url: "https://github.com/mitmproxy/mitmproxy",
    description: "An interactive, SSL/TLS-capable intercepting HTTP proxy for command line and web console debugging.",
    tags: ["Python", "MITM", "Proxy", "Traffic-Analysis"]
  },
  {
    name: "Responder",
    category: "Penetration Testing",
    subcategory: "LAN Spoofer",
    url: "https://github.com/SpiderLabs/Responder",
    description: "LLMNR, NBT-NS and MDNS poisoner. Intercepts local domain requests and captures NTLM challenge-response credentials.",
    tags: ["Python", "MITM", "Windows", "Spoofing"]
  },
  {
    name: "wifite",
    category: "Penetration Testing",
    subcategory: "Wireless Cracker",
    url: "https://github.com/derv82/wifite",
    description: "Automated wireless auditor and WEP/WPA cracker. Runs a sequence of terminal tools to audit Wi-Fi networks.",
    tags: ["Python", "Wireless", "Wi-Fi", "Automated"]
  },
  // Vulnerable Training Labs
  {
    name: "DVWA",
    category: "Vulnerable Labs",
    subcategory: "Training Ground",
    url: "https://github.com/ethicalhack3r/DVWA",
    description: "Damn Vulnerable Web Application. A PHP/MySQL web application designed to be vulnerability-ridden for education.",
    tags: ["PHP", "Vulnerable-App", "Training", "MySQL"]
  },
  {
    name: "WebGoat",
    category: "Vulnerable Labs",
    subcategory: "Training Ground",
    url: "https://github.com/WebGoat/WebGoat",
    description: "Deliberately insecure web application maintained by OWASP to teach web application security lessons.",
    tags: ["Java", "Vulnerable-App", "OWASP", "Training"]
  },
  {
    name: "railsgoat",
    category: "Vulnerable Labs",
    subcategory: "Training Ground",
    url: "https://github.com/OWASP/railsgoat",
    description: "An insecure version of Ruby on Rails designed to teach developers how to prevent common security flaws.",
    tags: ["Ruby", "Vulnerable-App", "Rails", "OWASP"]
  },
  {
    name: "docker-bench-security",
    category: "Vulnerable Labs",
    subcategory: "Container Audit",
    url: "https://github.com/diogomonica/docker-bench-security",
    description: "A script that checks for dozens of common best-practices around deploying Docker containers in production.",
    tags: ["Shell", "Docker", "Security-Audit", "Containers"]
  },
  // Forensics
  {
    name: "autopsy",
    category: "Digital Forensics",
    subcategory: "GUI Forensics Platform",
    url: "https://github.com/sleuthkit/autopsy",
    description: "Graphical user interface to The Sleuth Kit. Used by law enforcement, military, and corporate investigators to inspect disks.",
    tags: ["Java", "Forensics", "GUI", "Disk-Analysis"]
  },
  {
    name: "sleuthkit",
    category: "Digital Forensics",
    subcategory: "Disk Analysis tools",
    url: "https://github.com/sleuthkit/sleuthkit",
    description: "A library and collection of command-line tools to investigate disk images and recover deleted files from systems.",
    tags: ["C++", "Forensics", "CLI", "Disk-Analysis"]
  },
  {
    name: "Dshell",
    category: "Digital Forensics",
    subcategory: "Network Forensic Analysis",
    url: "https://github.com/USArmyResearchLab/Dshell",
    description: "An extensible network forensic analysis framework developed by the US Army Research Lab to parse packet captures.",
    tags: ["Python", "Network-Forensics", "PCAP", "Analysis"]
  },
  // Malware Analysis
  {
    name: "cuckoo",
    category: "Malware Analysis",
    subcategory: "Automated Sandbox",
    url: "https://github.com/cuckoosandbox/cuckoo",
    description: "Automated malware analysis sandbox. Evaluates malicious file behavior in isolated virtual environments.",
    tags: ["Python", "Sandbox", "Dynamic-Analysis", "Virtualization"]
  },
  {
    name: "yara",
    category: "Malware Analysis",
    subcategory: "Pattern Matching",
    url: "https://github.com/VirusTotal/yara",
    description: "Pattern matching Swiss army knife for malware researchers. Enables classification based on textual or binary patterns.",
    tags: ["C", "Signatures", "Yara-Rules", "Malware"]
  },
  {
    name: "androguard",
    category: "Malware Analysis",
    subcategory: "Android Analysis",
    url: "https://github.com/androguard/androguard",
    description: "Reverse engineering, analysis, and vulnerability detection tools for Android applications (.APK).",
    tags: ["Python", "Android", "Decompiler", "APK"]
  },
  {
    name: "flare-floss",
    category: "Malware Analysis",
    subcategory: "String Deobfuscation",
    url: "https://github.com/fireeye/flare-floss",
    description: "FireEye tool that automatically extracts obfuscated strings from malware using static analysis emulation.",
    tags: ["Python", "Deobfuscation", "Static-Analysis", "Malware"]
  },
  {
    name: "pefile",
    category: "Malware Analysis",
    subcategory: "Executable Inspector",
    url: "https://github.com/erocarrera/pefile",
    description: "Python module to read, write, and manipulate Portable Executable (PE) header formats used in Windows executables.",
    tags: ["Python", "PE-Header", "Windows", "Static-Analysis"]
  }
];

// Helper details for categories to render on the sidebar / statistics
const CATEGORY_METADATA = {
  "CTF Tools": { icon: "🏆", desc: "Frameworks and libraries for Capture The Flag challenges." },
  "Reverse Engineering": { icon: "🔧", desc: "Decompilers, debuggers, and binary analysis environments." },
  "Network Security": { icon: "🌐", desc: "Traffic analysis, packet manipulation, and packet sniffers." },
  "Penetration Testing": { icon: "🛡️", desc: "Exploits, password cracking, scanning, and web security tools." },
  "Vulnerable Labs": { icon: "🎓", desc: "Deliberately insecure applications and Docker setups for training." },
  "Digital Forensics": { icon: "🔍", desc: "Disk image analysis, file carving, and incident response." },
  "Malware Analysis": { icon: "☣️", desc: "Dynamic sandboxes, signature matching, and binary deobfuscators." }
};
