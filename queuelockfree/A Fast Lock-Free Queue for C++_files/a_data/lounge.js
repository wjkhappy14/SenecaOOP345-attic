<i>.</i>guess <i>=</i><i>=</i> <b>False</b><i>:</i>
                                <b>break</b>
                            <b>else</b><i>:</i>
                                puzzle<i>.</i>guessRestart<i>(</i>image<i>)</i>
                    <b>else</b><i>:</i>
                        puzzle<i>.</i>hiddenPairsElimination<i>(</i><i>)</i>
                        <b>print</b> <b>"Change:"</b><i>,</i>puzzle<i>.</i>change
                        <b>if</b> puzzle<i>.</i>change<i>:</i>
                            puzzle<i>.</i>newSolve<i>(</i><i>)</i>
                            err <i>=</i> puzzle<i>.</i>checkSolution<i>(</i><i>)</i>
                            <b>print</b> <b>"exit flag:"</b><i>,</i>err
                            <b>if</b> err <i>=</i><i>=</i> <i>-</i>1<i>:</i>
                                <b>if</b> puzzle<i>.</i>guess <i>=</i><i>=</i> <b>False</b><i>:</i>
                                    <b>break</b>
                                <b>else</b><i>:</i>
                                    puzzle<i>.</i>guessRestart<i>(</i>image<i>)</i>
                        <b>else</b><i>:</i>
                            err <i>=</i> puzzle<i>.</i>checkSolution<i>(</i><i>)</i>
                            <b>if</b> err <i>=</i><i>=</i> 0<i>:</i>
                                <b>break</b>
                            <b>else</b><i>:</i>
                                puzzle<i>.</i>guessElimination<i>(</i>image<i>)</i>
                                puzzle<i>.</i>newSolve<i>(</i><i>)</i>
                                err <i>=</i> puzzle<i>.</i>checkSolution<i>(</i><i>)</i>
                                <b>print</b> <b>"exit flag:"</b><i>,</i>err
                                <b>while</b> err <i>=</i><i>=</i> <i>-</i>1<i>:</i>
                                    puzzle<i>.</i>guessRestart<i>(</i>image<i>)</i>
                                    puzzle<i>.</i>newSolve<i>(</i><i>)</i>
                                    err <i>=</i> puzzle<i>.</i>checkSolution<i>(</i><i>)</i>
                                    <b>print</b> <b>"exit flag:"</b><i>,</i>err
                                    
            <i>#continuation of: while puzzle.change:</i>
            t5 <i>=</i> time<i>.</i>time<i>(</i><i>)</i>
            <b>print</b> <b>"capture time: "</b><i>,</i>t2<i>-</i>t1
            <b>print</b> <b>"perspective time: "</b><i>,</i>t3<i>-</i>t2
            <b>print</b> <b>"virtual time: "</b><i>,</i>t4<i>-</i>t3
            <b>print</b> <b>"solve loop time: "</b><i>,</i> t5<i>-</i>t4
            
        <i>#continuation of: while True::                     </i>
        err <i>=</i> puzzle<i>.</i>checkSolution<i>(</i><i>)</i>
        <b>print</b> <b>"exit flag:"</b><i>,</i>err
        elapsed <i>=</i> time<i>.</i>time<i>(</i><i>)</i> <i>-</i> start_time
        <b>print</b> <b>"elapsed time: "</b><i>,</i>elapsed
        <b>if</b> err<i>=</i><i>=</i>0<i>:</i>
            <b>print</b> <b>"SOLVED!"</b>
            status<i>.</i>completed <i>=</i> <b>True</b>
        <b>while</b> status<i>.</i>completed <i>=</i><i>=</i> <b>True</b><i>:</i>
            <i>#final loop to be run after puzzle is solved</i>
            t1 <i>=</i> time<i>.</i>time<i>(</i><i>)</i>
            image<i>.</i>captureImage<i>(</i>status<i>)</i>
            <b>if</b> status<i>.</i>restart <i>=</i><i>=</i> <b>True</b><i>:</i>
                <b>print</b> <b>"Restarting..."</b>
                <b>break</b>
            t2 <i>=</i> time<i>.</i>time<i>(</i><i>)</i>
            <b>print</b> <b>"capture time: "</b><i>,</i>t2<i>-</i>t1
            <b>if</b> image<i>.</i>maxArea <i>&gt;</i> 0<i>:</i>
                image<i>.</i>perspective<i>(</i><i>)</i>
                t3 <i>=</i> time<i>.</i>time<i>(</i><i>)</i>
                <b>print</b> <b>"perspective time: "</b><i>,</i>t3<i>-</i>t2
                image<i>.</i>virtualImage<i>(</i>puzzle<i>)</i>
                t4 <i>=</i> time<i>.</i>time<i>(</i><i>)</i>
                <b>print</b> <b>"virtual time: "</b><i>,</i>t4<i>-</i>t3


<b>if</b> <b>__name__</b> <i>=</i><i>=</i> <b>'__main__'</b><i>:</i> main<i>(</i><i>)</i>
</pre>
</div>

</div>
</div>
</div>

</body></html>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       CE="Georgia"><DL><DT>function, <A HREF="Chapter02.html#Index291">1</A><DD> abstract base classes and pure virtual functions, <A HREF="Chapter15.html#Index2482">1</A></FONT><BR>
<FONT FACE="Georgia"> access, <A HREF="Chapter09.html#Index1625">1</A></FONT><BR>
<FONT FACE="Georgia"> adding more to a design, <A HREF="Chapter05.html#Index1287">1</A></FONT><BR>
<FONT FACE="Georgia"> adding new virtual functions in the derived class, <A HREF="Chapter15.html#Index2494">1</A></FONT><BR>
<FONT FACE="Georgia"> address, <A HREF="Chapter03.html#Index929">1</A>, <A HREF="Chapter09.html#Index1654">2</A></FONT><BR>
<FONT FACE="Georgia"><DL><DT> argument, <A HREF="Chapter03.html#Index585">1</A><DD> const, <A HREF="Chapter08.html#Index1508">1</A></FONT><BR>
<FONT FACE="Georgia"> const reference , <A HREF="Chapter08.html#Index1533">1</A></FONT><BR>
<FONT FACE="Georgia"> reference, <A HREF="Chapter11.html#Index1862">1</A></DL> array of pointers to, <A HREF="Chapter03.html#Index942">1</A></FONT><BR>
<FONT FACE="Georgia"><DL><DT> assembly-language code generated<DD> function call, <A HREF="Chapter11.html#Index1891">1</A></FONT><BR>
<FONT FACE="Georgia"> virtual function call, <A HREF="Chapter15.html#Index2458">1</A></DL> binding, for a function call, <A HREF="Chapter15.html#Index2407">1</A>, <A HREF="Chapter15.html#Index2454">2</A></FONT><BR>
<FONT FACE="Georgia"> body, <A HREF="Chapter02.html#Index306">1</A></FONT><BR>
<FONT FACE="Georgia"> C library, <A HREF="Chapter03.html#Index450">1</A></FONT><BR>
<FONT FACE="Georgia"> call operator(&#160;), <A HREF="Chapter12.html#Index2049">1</A></FONT><BR>
<FONT FACE="Georgia"> call overhead, <A HREF="Chapter09.html#Index1601">1</A>, <A HREF="Chapter09.html#Index1619">2</A></FONT><BR>
<FONT FACE="Georgia"> called for side effect, <A HREF="Chapter07.html#Index1398">1</A></FONT><BR>
<FONT FACE="Georgia"> complicated function definitions, <A HREF="Chapter03.html#Index935">1</A></FONT><BR>
<FONT FACE="Georgia"> constructors, behavior of virtual functions inside, <A HREF="Chapter15.html#Index2529">1</A></FONT><BR>
<FONT FACE="Georgia"> creating, <A HREF="Chapter03.html#Index424">1</A></FONT><BR>
<FONT FACE="Georgia"><DL><DT> declaration, <A HREF="Chapter03.html#Index452">1</A>, <A HREF="Chapter04.html#Index1137">2</A>, <A HREF="Chapter07.html#Index1401">3</A><DD> not essential in C, <A HREF="Chapter04.html#Index1006">1</A></FONT><BR>
<FONT FACE="Georgia"> required, <A HREF="Chapter04.html#Index1047">1</A></FONT><BR>
<FONT FACE="Georgia"> syntax, <A HREF="Chapter02.html#Index299">1</A></DL> definition, <A HREF="Chapter02.html#Index304">1</A></FONT><BR>
<FONT FACE="Georgia"> empty argument list, C vs. C++, <A HREF="Chapter03.html#Index431">1</A></FONT><BR>
<FONT FACE="Georgia"> expanding the function interface, <A HREF="Chapter07.html#Index1444">1</A></FONT><BR>
<FONT FACE="Georgia"><DL><DT> global, <A HREF="Chapter04.html#Index1049">1</A><DD> friend, <A HREF="Chapter05.html#Index1205">1</A></DL> helper, assembly, <A HREF="Chapter11.html#Index1896">1</A></FONT><BR>
<FONT FACE="Georgia"><DL><DT> inline, <A HREF="Chapter09.html#Index1604">1</A>, <A HREF="Chapter09.html#Index1616">2</A>, <A HREF="Chapter15.html#Index2474">3</A><DD> header files, <A HREF="Chapter09.html#Index1683">1</A></DL> local class (class defined inside a function), <A HREF="Chapter10.html#Index1810">1</A></FONT><BR>
<FONT FACE="Georgia"><DL><DT> member function, <A HREF="Chapter01.html#Index92">1</A>, <A HREF="Chapter04.html#Index1027">2</A><DD><DL><DT> calling<DD> a member function, <A HREF="Chapter04.html#Index1094">1</A></FONT><BR>
<FONT FACE="Georgia"> another member function from within a member function, <A HREF="Chapter04.html#Index1057">1</A></FONT><BR>
<FONT FACE="Georgia"> base-class functions, <A HREF="Chapter14.html#Index2291">1</A></DL> const, <A HREF="Chapter08.html#Index1538">1</A>, <A HREF="Chapter08.html#Index1571">2</A></FONT><BR>
<FONT FACE="Georgia"> friend, <A HREF="Chapter05.html#Index1209">1</A></FONT><BR>
<FONT FACE="Georgia"> inheritance and static member functions, <A HREF="Chapter14.html#Index2341">1</A></FONT><BR>
<FONT FACE="Georgia"> overloaded operator, <A HREF="Chapter12.html#Index1974">1</A></FONT><BR>
<FONT FACE="Georgia"> selection, <A HREF="Chapter04.html#Index1056">1</A></DL> objects, <A HREF="Chapter12.html#Index2050">1</A></FONT><BR>
<FONT FACE="Georgia"><DL><DT> overloading, <A HREF="Chapter07.html#Index1378">1</A><DD> operator, <A HREF="Chapter12.html#Index1966">1</A></FONT><BR>
<FONT FACE="Georgia"> using declaration, namespaces, <A HREF="Chapter10.html#Index1788">1</A></DL> overriding, <A HREF="Chapter01.html#Index126">1</A></FONT><BR>
<FONT FACE="Georgia"> pass-by reference &amp; temporary objects, <A HREF="Chapter11.html#Index1878">1</A></FONT><BR>
<FONT FACE="Georgia"><DL><DT> pointer<DD> defining, <A HREF="Chapter03.html#Index932">1</A></FONT><BR>
<FONT FACE="Georgia"> to member function, <A HREF="Chapter11.html#Index1958">1</A></FONT><BR>
<FONT FACE="Georgia"> using a function pointer, <A HREF="Chapter03.html#Index938">1</A></DL> polymorphic function call, <A HREF="Chapter15.html#Index2442">1</A></FONT><BR>
<FONT FACE="Georgia"> prototyping, <A HREF="Chapter03.html#Index426">1</A></FONT><BR>
<FONT FACE="Georgia"> pure virtual function definitions, <A HREF="Chapter15.html#Index2489">1</A></FONT><BR>
<FONT FACE="Georgia"> redefinition during inheritance, <A HREF="Chapter14.html#Index2287">1</A></FONT><BR>
<FONT FACE="Georgia"><DL><DT> return value<DD> by reference, <A HREF="Chapter11.html#Index1865">1</A></FONT><BR>
<FONT FACE="Georgia"> returning a value, <A HREF="Chapter03.html#Index448">1</A></FONT><BR>
<FONT FACE="Georgia"> type, <A HREF="Chapter14.html#Index2322">1</A></FONT><BR>
<FONT FACE="Georgia"> void, <A HREF="Chapter03.html#Index445">1</A></DL> signature, <A HREF="Chapter14.html#Index2319">1</A></FONT><BR>
<FONT FACE="Georgia"> stack frame for a function call , <A HREF="Chapter11.html#Index1898">1</A></FONT><BR>
<FONT FACE="Georgia"><DL><DT> static<DD> class objects inside functions, <A HREF="Chapter10.html#Index1706">1</A></FONT><BR>
<FONT FACE="Georgia"> member, <A HREF="Chapter08.html#Index1592">1</A>, <A HREF="Chapter10.html#Index1813">2</A>, <A HREF="Chapter11.html#Index1917">3</A></FONT><BR>
<FONT FACE="Georgia"> objects inside functions, <A HREF="Chapter10.html#Index1836">1</A></FONT><BR>
<FONT FACE="Georgia"> variables inside functions, <A HREF="Chapter10.html#Index1696">1</A></DL> templates, <A HREF="Chapter16.html#Index2725">1</A></FONT><BR>
<FONT FACE="Georgia"> type, <A HREF="Chapter09.html#Index1649">1</A></FONT><BR>
<FONT FACE="Georgia"> unique identifier for each, <A HREF="Chapter07.html#Index1385">1</A></FONT><BR>
<FONT FACE="Georgia"> variable argument list, <A HREF="Chapter03.html#Index441">1</A></FONT><BR>
<FONT FACE="Georgia"><DL><DT> virtual function, <A HREF="Chapter15.html#Index2392">1</A>, <A HREF="Chapter15.html#Index2399">2</A><DD> constructor, <A HREF="Chapter15.html#Index2511">1</A></FONT><BR>
<FONT FACE="Georgia"> overriding, <A HREF="Chapter15.html#Index2421">1</A></FONT><BR>
<FONT FACE="Georgia"> picturing, <A HREF="Chapter15.html#Index2450">1</A></DL></DL><DIV ALIGN="CENTER"><FONT FACE="Verdana"SIZE="+2"><B><A NAME="IA-G">G</A></FONT></B></FONT></P></DIV>
<FONT FACE="Georgia">garbage collector, <A HREF="Chapter01.html#Index160">1</A>, <A HREF="Chapter13.html#Index2222">2</A></FONT><BR>
<FONT FACE="Georgia">generic algorithm, <A HREF="Chapter16.html#Index2729">1</A></FONT><BR>
<FONT FACE="Georgia">get and set functions, <A HREF="Chapter09.html#Index1640">1</A></FONT><BR>
<FONT FACE="Georgia">get(&#160;), <A HREF="Chapter11.html#Index1949">1</A></FONT><BR>
<FONT FACE="Georgia"><DL><DT>getline(&#160;)<DD> and string, <A HREF="Chapter13.html#Index2209">1</A></FONT><BR>
<FONT FACE="Georgia"> from iostreams library, <A HREF="Chapter02.html#Index382">1</A></DL>Glass, Robert, <A HREF="AppendixC.html#Index2789">1</A></FONT><BR>
<FONT FACE="Georgia"><DL><DT>global<DD> friend function, <A HREF="Chapter05.html#Index1204">1</A></FONT><BR>
<FONT FACE="Georgia"> functions, <A HREF="Chapter04.html#Index1048">1</A></FONT><BR>
<FONT FACE="Georgia"> new and delete, overloading, <A HREF="Chapter13.html#Index2234">1</A></FONT><BR>
<FONT FACE="Georgia"> object constructor, <A HREF="Chapter10.html#Index1722">1</A></FONT><BR>
<FONT FACE="Georgia"> operator, overloaded, <A HREF="Chapter12.html#Index1973">1</A></FONT><BR>
<FONT FACE="Georgia"> scope resolution, <A HREF="Chapter04.html#Index1173">1</A></FONT><BR>
<FONT FACE="Georgia"> static initialization dependency of global objects, <A HREF="Chapter10.html#Index1823">1</A></FONT><BR>
<FONT FACE="Georgia"> variables, <A HREF="Chapter03.html#Index615">1</A></DL>GNU C++, <A HREF="Chapter01.html#Index243">1</A></FONT><BR>
<FONT FACE="Georgia">Gorlen, Keith, <A HREF="Chapter16.html#Index2606">1</A></FONT><BR>
<FONT FACE="Georgia"><DL><DT>goto, <A HREF="Chapter03.html#Index490">1</A>, <A HREF="Chapter06.html#Index1308">2</A>, <A HREF="Chapter06.html#Index1337">3</A><DD> non-local, <A HREF="Chapter06.html#Index1310">1</A></DL><DL><DT>greater than<DD> &gt;, <A HREF="Chapter03.html#Index698">1</A></FONT><BR>
<FONT FACE="Georgia"> or equal to (&gt;=), <A HREF="Chapter03.html#Index700">1</A></DL>guaranteed initialization, <A HREF="Chapter06.html#Index1338">1</A>, <A HREF="Chapter13.html#Index2140">2</A></FONT><BR>
<FONT FACE="Georgia">guards, include, on header files, <A HREF="AppendixA.html#Index2746">1</A></FONT><BR>
<FONT FACE="Georgia"><DL><DT>guidelines<DD> argument passing, <A HREF="Chapter11.html#Index1882">1</A></FONT><BR>
<FONT FACE="Georgia"> C++ programming guidelines, <A HREF="AppendixB.html#Index2763">1</A></FONT><BR>
<FONT FACE="Georgia"> object development, <A HREF="Chapter01.html#Index197">1</A></DL><DIV ALIGN="CENTER"><FONT FACE="Verdana"SIZE="+2"><B><A NAME="IA-H">H</A></FONT></B></FONT></P></DIV>
<FONT FACE="Georgia">hack, enum, <A HREF="Chapter08.html#Index1562">1</A></FONT><BR>
<FONT FACE="Georgia">handle classes, <A HREF="Chapter05.html#Index1257">1</A>, <A HREF="Chapter05.html#Index1271">2</A></FONT><BR>
<FONT FACE="Georgia"><DL><DT>has-a, <A HREF="Chapter01.html#Index113">1</A><DD> composition, <A HREF="Chapter14.html#Index2346">1</A></DL><DL><DT>header file, <A HREF="Chapter02.html#Index312">1</A>, <A HREF="Chapter03.html#Index453">2</A>, <A HREF="Chapter03.html#Index513">3</A>, <A HREF="Chapter04.html#Index1044">4</A>, <A HREF="Chapter04.html#Index1109">5</A>, <A HREF="Chapter07.html#Index1426">6</A>, <A HREF="Chapter08.html#Index1458">7</A><DD> code organization, <A HREF="Chapter04.html#Index1161">1</A></FONT><BR>
<FONT FACE="Georgia"> enforced use of in C++, <A HREF="Chapter04.html#Index1120">1</A></FONT><BR>
<FONT FACE="Georgia"> formatting standard, <A HREF="Chapter04.html#Index1151">1</A></FONT><BR>
<FONT FACE="Georgia"> include guards, <A HREF="Chapter04.html#Index1153">1</A></FONT><BR>
<FONT FACE="Georgia"> inline definitions, <A HREF="Chapter09.html#Index1620">1</A></FONT><BR>
<FONT FACE="Georgia"> internal linkage, <A HREF="Chapter10.html#Index1741">1</A></FONT><BR>
<FONT FACE="Georgia"> namespaces, <A HREF="Chapter10.html#Index1790">1</A></FONT><BR>
<FONT FACE="Georgia"> new file include format, <A HREF="Chapter02.html#Index318">1</A></FONT><BR>
<FONT FACE="Georgia"> order of inclusion, <A HREF="AppendixA.html#Index2742">1</A></FONT><BR>
<FONT FACE="Georgia"> templates, <A HREF="Chapter16.html#Index2635">1</A>, <A HREF="Chapter16.html#Index2661">2</A></FONT><BR>
<FONT FACE="Georgia"> using directives, <A HREF="Chapter04.html#Index1158">1</A></FONT><BR>
<FONT FACE="Georgia">importance of using a common header file, <A HREF="Chapter04.html#Index1112">1</A></FONT><BR>
<FONT FACE="Georgia">multiple inclusion, <A HREF="Chapter04.html#Index1134">1</A></FONT><BR>
<FONT FACE="Georgia">structure definition in a header file, <A HREF="Chapter04.html#Index1052">1</A></DL><DL><DT>heap, <A HREF="Chapter01.html#Index153">1</A>, <A HREF="Chapter04.html#Index980">2</A><DD> C heap, <A HREF="Chapter13.html#Index2156">1</A></FONT><BR>
<FONT FACE="Georgia"> compactor, <A HREF="Chapter04.html#Index996">1</A></FONT><BR>
<FONT FACE="Georgia"> creating objects, <A HREF="Chapter13.html#Index2183">1</A></FONT><BR>
<FONT FACE="Georgia"> fragmentation,