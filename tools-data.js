const TOOLS_DATA = [
  // CTF Tools
  {
    name: "pwntools",
    category: "CTF Tools",
    subcategory: "Exploitation Framework",
    installCmd: "pip install --upgrade pwntools",
    description: "A CTF framework and exploit development library written in Python, designed for rapid prototyping and development.",
    tags: ["Python", "Exploitation", "CTF", "Pwn"]
  },
  // Reverse Engineering
  {
    name: "peda",
    category: "Reverse Engineering",
    subcategory: "GDB Assistant",
    installCmd: "apt-get install gdb-peda",
    description: "Python Exploit Development Assistance for GDB. Enhances GDB display with colorization, command shortcuts, and exploit helpers.",
    tags: ["Python", "GDB", "Debugging", "Exploit-Dev"]
  },
  {
    name: "plasma",
    category: "Reverse Engineering",
    subcategory: "Disassembler",
    installCmd: "pip install plasma-disasm",
    description: "Interactive disassembler for x86/ARM/MIPS. Generates pseudo-code with colored syntax and dynamic navigation.",
    tags: ["C++", "Disassembler", "ARM", "x86"]
  },
  {
    name: "radare2",
    category: "Reverse Engineering",
    subcategory: "Recon & Analysis",
    installCmd: "apt-get install radare2",
    description: "A complete, portable, multi-architecture reverse engineering framework and command-line toolkit.",
    tags: ["C", "Disassembler", "Hex-Editor", "Debugger"]
  },
  {
    name: "x64dbg",
    category: "Reverse Engineering",
    subcategory: "Windows Debugger",
    installCmd: "winget install x64dbg",
    description: "An open-source x64/x32 debugger for Windows, focusing on malware analysis and executable binary modification.",
    tags: ["C++", "Debugger", "Windows", "Malware"]
  },
  {
    name: "edb-debugger",
    category: "Reverse Engineering",
    subcategory: "Modular Debugger",
    installCmd: "apt-get install edb-debugger",
    description: "A cross-platform modular debugger utilizing Qt, designed for usability and binary reverse engineering.",
    tags: ["C++", "Qt", "Debugger", "Linux", "Windows"]
  },
  {
    name: "dex2jar",
    category: "Reverse Engineering",
    subcategory: "Android Decompiler",
    installCmd: "apt-get install dex2jar",
    description: "Utilities to read and convert Android Dalvik Executable (.dex) files into standard Java class files.",
    tags: ["Java", "Android", "Decompiler", "APK"]
  },
  {
    name: "jd-gui",
    category: "Reverse Engineering",
    subcategory: "Java Decompiler",
    installCmd: "winget install java-decompiler",
    description: "Graphical user interface utility that displays Java source codes of Compiled .class files.",
    tags: ["Java", "Decompiler", "GUI"]
  },
  {
    name: "upx",
    category: "Reverse Engineering",
    subcategory: "Binary Packer",
    installCmd: "apt-get install upx-ucl",
    description: "The Ultimate Packer for eXecutables. High-performance executable file compressor for multiple formats.",
    tags: ["C++", "Compression", "Packer", "Binary"]
  },
  {
    name: "voltron",
    category: "Reverse Engineering",
    subcategory: "Debugger UI",
    installCmd: "pip install voltron",
    description: "An extensible debugger UI utility for hackers. Plugs into GDB, LLDB, WinDbg, and more to display status screens.",
    tags: ["Python", "GDB", "LLDB", "CLI"]
  },
  {
    name: "mona",
    category: "Reverse Engineering",
    subcategory: "Exploit Helper",
    installCmd: "powershell -Command \"Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/corelan/mona/master/mona.py' -OutFile 'C:\\Program Files\\Immunity Debugger\\PyCommands\\mona.py'\"",
    description: "Immunity Debugger and WinDbg plugin designed to automate exploit writing tasks (structured exception handlers, bad chars).",
    tags: ["Python", "Exploit-Dev", "WinDbg", "Assembly"]
  },
  // Network Sniffing & Analysis
  {
    name: "moloch",
    category: "Network Security",
    subcategory: "Packet Capture",
    installCmd: "apt-get install moloch",
    description: "Large scale IPv4 packet capturing (PCAP), indexing, and database system with web dashboard interface.",
    tags: ["Node.js", "C", "PCAP", "Sniffer", "Elasticsearch"]
  },
  {
    name: "netsniff-ng",
    category: "Network Security",
    subcategory: "High-Performance Sniffer",
    installCmd: "apt-get install netsniff-ng",
    description: "Zero-copy analyzer, packet sniffer, and network utility suite for highly efficient Linux network operations.",
    tags: ["C", "Sniffer", "Linux", "Low-Level"]
  },
  {
    name: "yersinia",
    category: "Network Security",
    subcategory: "Protocol Auditor",
    installCmd: "apt-get install yersinia",
    description: "Network security tool designed to audit, stress test, and attack network protocols like DHCP, STP, CDP, and HSRP.",
    tags: ["C", "Protocols", "Auditing", "Layer2"]
  },
  {
    name: "scapy",
    category: "Network Security",
    subcategory: "Packet Manipulation",
    installCmd: "pip install scapy",
    description: "A powerful Python-based interactive packet manipulation program, generator, sniffer, and scanner.",
    tags: ["Python", "PCAP", "Packet-Crafting", "Scanner"]
  },
  {
    name: "bro-ids",
    category: "Network Security",
    subcategory: "Network Analysis",
    installCmd: "apt-get install zeek",
    description: "A powerful network analysis framework (Zeek) focusing on security monitoring and behavior analysis.",
    tags: ["C++", "IDS", "Traffic-Analysis", "Logging"]
  },
  // Penetration Testing - Exploiting
  {
    name: "metasploit-framework",
    category: "Penetration Testing",
    subcategory: "Exploitation Framework",
    installCmd: "curl https://raw.githubusercontent.com/rapid7/metasploit-omnibus/master/config/templates/metasploit-framework-wrappers/msfupdate.erb > msfinstall && chmod 755 msfinstall && ./msfinstall",
    description: "The world's most widely used penetration testing framework. Provides exploit development, payloads, and post-exploitation modules.",
    tags: ["Ruby", "Exploitation", "Scanner", "Payloads", "Post-Exploitation"]
  },
  {
    name: "beef",
    category: "Penetration Testing",
    subcategory: "Web Exploitation",
    installCmd: "apt-get install beef-xss",
    description: "Browser Exploitation Framework focusing on assessing the web browser security posture via client-side vectors.",
    tags: ["Ruby", "JavaScript", "Browsers", "Client-Side"]
  },
  {
    name: "PowerSploit",
    category: "Penetration Testing",
    subcategory: "Active Directory & Windows",
    installCmd: "powershell -Command \"Install-Module -Name PowerSploit\"",
    description: "A collection of Microsoft PowerShell modules that can be used to aid penetration testers in Windows environments.",
    tags: ["PowerShell", "Active-Directory", "Post-Exploitation", "Windows"]
  },
  {
    name: "commix",
    category: "Penetration Testing",
    subcategory: "OS Command Injection",
    installCmd: "apt-get install commix",
    description: "Automated All-in-One OS command injection and exploitation tool designed to find injection vulnerabilities in web requests.",
    tags: ["Python", "Exploitation", "Web", "CLI"]
  },
  {
    name: "Windows-Exploit-Suggester",
    category: "Penetration Testing",
    subcategory: "Privilege Escalation",
    installCmd: "pip install xlrd --upgrade && python wes.py --update",
    description: "Compares a target's operating system patch level against the Microsoft vulnerability database to detect missing patches.",
    tags: ["Python", "Scanner", "Audit", "Windows"]
  },
  {
    name: "Linux_Exploit_Suggester",
    category: "Penetration Testing",
    subcategory: "Privilege Escalation",
    installCmd: "curl -L https://raw.githubusercontent.com/mzet-/linux-exploit-suggester/master/linux-exploit-suggester.sh -o les.sh && chmod +x les.sh",
    description: "Assesses potential local privilege escalation vulnerabilities in Linux systems by analyzing operating system details and kernel version.",
    tags: ["Shell", "Kernel", "Audit", "Linux"]
  },
  // Penetration Testing - Password Cracking
  {
    name: "hashcat",
    category: "Penetration Testing",
    subcategory: "Password Cracking",
    installCmd: "apt-get install hashcat",
    description: "The world's fastest and most advanced password recovery utility, supporting GPU acceleration and multiple hashing algorithms.",
    tags: ["C", "GPU", "Cracker", "Passwords"]
  },
  {
    name: "JohnTheRipper",
    category: "Penetration Testing",
    subcategory: "Password Cracking",
    installCmd: "apt-get install john",
    description: "A fast, open-source password cracker, supporting dictionary attacks, brute-forcing, and custom rules on unix formats.",
    tags: ["C", "CLI", "Cracker", "Passwords"]
  },
  {
    name: "thc-hydra",
    category: "Penetration Testing",
    subcategory: "Network Authentication",
    installCmd: "apt-get install hydra",
    description: "A very fast network logon cracker which supports numerous protocols including SSH, FTP, HTTP, Telnet, SMB, and databases.",
    tags: ["C", "Cracker", "Network", "Logon"]
  },
  // Penetration Testing - Info Gathering
  {
    name: "dnsrecon",
    category: "Penetration Testing",
    subcategory: "DNS Enumeration",
    installCmd: "apt-get install dnsrecon",
    description: "DNS Enumeration script that checks for zone transfers, wildcard resolution, DNS records, subdomains, and SRV lookups.",
    tags: ["Python", "DNS", "Recon", "Information-Gathering"]
  },
  {
    name: "dnsenum",
    category: "Penetration Testing",
    subcategory: "DNS Enumeration",
    installCmd: "apt-get install dnsenum",
    description: "Multithreaded perl script to enumerate DNS information of a domain and discover non-contiguous ip blocks.",
    tags: ["Perl", "DNS", "Recon", "Information-Gathering"]
  },
  {
    name: "subbrute",
    category: "Penetration Testing",
    subcategory: "Subdomain Discovery",
    installCmd: "pip install subbrute",
    description: "A subdomain brute-forcing tool that uses open resolvers as a proxy to bypass rate-limiting restrictions.",
    tags: ["Python", "Recon", "DNS", "Subdomain"]
  },
  {
    name: "knock",
    category: "Penetration Testing",
    subcategory: "Subdomain Scanner",
    installCmd: "pip install knockpy",
    description: "Subdomain scanner designed to discover subdomains on a target domain using a wordlist and DNS query operations.",
    tags: ["Python", "Recon", "Subdomain", "DNS"]
  },
  {
    name: "smbmap",
    category: "Penetration Testing",
    subcategory: "SMB Enumeration",
    installCmd: "apt-get install smbmap",
    description: "Handy SMB share enumeration tool that allows users to quickly inspect drive permissions and upload/download files.",
    tags: ["Python", "SMB", "Recon", "Active-Directory"]
  },
  {
    name: "ivre",
    category: "Penetration Testing",
    subcategory: "Network Mapping",
    installCmd: "pip install ivre",
    description: "Network reconnaissance framework that integrates Nmap, ZMap, Masscan, and database storage to analyze network spaces.",
    tags: ["Python", "OSINT", "Network-Mapping", "Web"]
  },
  // Penetration Testing - Web Security
  {
    name: "zaproxy",
    category: "Penetration Testing",
    subcategory: "Web App Scanner",
    installCmd: "apt-get install zaproxy",
    description: "OWASP Zed Attack Proxy (ZAP) is a popular, free, open-source tool for finding security vulnerabilities in web applications.",
    tags: ["Java", "Web", "Scanner", "Proxy", "Vulnerability-Scanner"]
  },
  {
    name: "sqlmap",
    category: "Penetration Testing",
    subcategory: "SQL Injection",
    installCmd: "apt-get install sqlmap",
    description: "Automated SQL injection and database takeover tool. Supports direct database connection and exploitation of web apps.",
    tags: ["Python", "Database", "Exploitation", "Web"]
  },
  {
    name: "wpscan",
    category: "Penetration Testing",
    subcategory: "WordPress Scanner",
    installCmd: "gem install wpscan",
    description: "Black box WordPress security scanner to check for vulnerable plugins, core vulnerabilities, and theme flaws.",
    tags: ["Ruby", "WordPress", "Web", "Scanner"]
  },
  {
    name: "nikto",
    category: "Penetration Testing",
    subcategory: "Web Server Scanner",
    installCmd: "apt-get install nikto",
    description: "A web server scanner that tests web servers for multiple items, including dangerous files, CGI scripts, and outdated software.",
    tags: ["Perl", "Web-Server", "Scanner", "SSL"]
  },
  {
    name: "arachni",
    category: "Penetration Testing",
    subcategory: "Web App Scanner",
    installCmd: "apt-get install arachni",
    description: "High-performance Web Application Security Scanner Framework. Emulates complex user workflows to find vulnerabilities.",
    tags: ["Ruby", "Scanner", "Web", "HTML5"]
  },
  {
    name: "weevely3",
    category: "Penetration Testing",
    subcategory: "Web Shell",
    installCmd: "apt-get install weevely",
    description: "Weaponized web shell designed for post-exploitation on web servers. Provides stealthy remote terminal execution.",
    tags: ["Python", "Post-Exploitation", "Web-Shell", "PHP"]
  },
  {
    name: "NoSQLMap",
    category: "Penetration Testing",
    subcategory: "NoSQL Injection",
    installCmd: "pip install nosqlmap",
    description: "Automated MongoDB and NoSQL database takeover tool, scanning for default configurations and injection vectors.",
    tags: ["Python", "NoSQL", "Database", "MongoDB"]
  },
  // Penetration Testing - Post Exploitation, MITM & Wireless
  {
    name: "mimikatz",
    category: "Penetration Testing",
    subcategory: "Credentials Dumping",
    installCmd: "winget install mimikatz",
    description: "Windows credentials recovery tool. Extracts plain-text passwords, hashes, PINs, and Kerberos tickets from LSASS memory.",
    tags: ["C", "Windows", "Credentials", "Post-Exploitation"]
  },
  {
    name: "Empire",
    category: "Penetration Testing",
    subcategory: "Post-Exploitation Agent",
    installCmd: "apt-get install powershell-empire",
    description: "PowerShell and Python post-exploitation agent framework, providing secure communication channels and modules.",
    tags: ["Python", "PowerShell", "Command-and-Control", "Post-Exploitation"]
  },
  {
    name: "mitmproxy",
    category: "Penetration Testing",
    subcategory: "Intercepting Proxy",
    installCmd: "pip install mitmproxy",
    description: "An interactive, SSL/TLS-capable intercepting HTTP proxy for command line and web console debugging.",
    tags: ["Python", "MITM", "Proxy", "Traffic-Analysis"]
  },
  {
    name: "Responder",
    category: "Penetration Testing",
    subcategory: "LAN Spoofer",
    installCmd: "apt-get install responder",
    description: "LLMNR, NBT-NS and MDNS poisoner. Intercepts local domain requests and captures NTLM challenge-response credentials.",
    tags: ["Python", "MITM", "Windows", "Spoofing"]
  },
  {
    name: "wifite",
    category: "Penetration Testing",
    subcategory: "Wireless Cracker",
    installCmd: "apt-get install wifite",
    description: "Automated wireless auditor and WEP/WPA cracker. Runs a sequence of terminal tools to audit Wi-Fi networks.",
    tags: ["Python", "Wireless", "Wi-Fi", "Automated"]
  },
  // Vulnerable Training Labs
  {
    name: "DVWA",
    category: "Vulnerable Labs",
    subcategory: "Training Ground",
    installCmd: "docker pull vulnerables/web-dvwa",
    description: "Damn Vulnerable Web Application. A PHP/MySQL web application designed to be vulnerability-ridden for education.",
    tags: ["PHP", "Vulnerable-App", "Training", "MySQL"]
  },
  {
    name: "WebGoat",
    category: "Vulnerable Labs",
    subcategory: "Training Ground",
    installCmd: "docker pull webgoat/webgoat",
    description: "Deliberately insecure web application maintained by OWASP to teach web application security lessons.",
    tags: ["Java", "Vulnerable-App", "OWASP", "Training"]
  },
  {
    name: "docker-bench-security",
    category: "Vulnerable Labs",
    subcategory: "Container Audit",
    installCmd: "docker run -it --net host --pid host --userns host --cap-add audit_control docker/docker-bench-security",
    description: "A script that checks for dozens of common best-practices around deploying Docker containers in production.",
    tags: ["Shell", "Docker", "Security-Audit", "Containers"]
  },
  // Forensics
  {
    name: "autopsy",
    category: "Digital Forensics",
    subcategory: "GUI Forensics Platform",
    installCmd: "winget install autopsy",
    description: "Graphical user interface to The Sleuth Kit. Used by law enforcement, military, and corporate investigators to investigate disks.",
    tags: ["Java", "Forensics", "GUI", "Disk-Analysis"]
  },
  {
    name: "sleuthkit",
    category: "Digital Forensics",
    subcategory: "Disk Analysis tools",
    installCmd: "apt-get install sleuthkit",
    description: "A library and collection of command-line tools to investigate disk images and recover deleted files from systems.",
    tags: ["C++", "Forensics", "CLI", "Disk-Analysis"]
  },
  {
    name: "Dshell",
    category: "Digital Forensics",
    subcategory: "Network Forensic Analysis",
    installCmd: "pip install dshell",
    description: "An extensible network forensic analysis framework developed by the US Army Research Lab to parse packet captures.",
    tags: ["Python", "Network-Forensics", "PCAP", "Analysis"]
  },
  // Malware Analysis
  {
    name: "cuckoo",
    category: "Malware Analysis",
    subcategory: "Automated Sandbox",
    installCmd: "pip install cuckoo",
    description: "Automated malware analysis sandbox. Evaluates malicious file behavior in isolated virtual environments.",
    tags: ["Python", "Sandbox", "Dynamic-Analysis", "Virtualization"]
  },
  {
    name: "yara",
    category: "Malware Analysis",
    subcategory: "Pattern Matching",
    installCmd: "apt-get install yara",
    description: "Pattern matching Swiss army knife for malware researchers. Enables classification based on textual or binary patterns.",
    tags: ["C", "Signatures", "Yara-Rules", "Malware"]
  },
  {
    name: "androguard",
    category: "Malware Analysis",
    subcategory: "Android Analysis",
    installCmd: "pip install androguard",
    description: "Reverse engineering, analysis, and vulnerability detection tools for Android applications (.APK).",
    tags: ["Python", "Android", "Decompiler", "APK"]
  },
  {
    name: "pefile",
    category: "Malware Analysis",
    subcategory: "Executable Inspector",
    installCmd: "pip install pefile",
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
