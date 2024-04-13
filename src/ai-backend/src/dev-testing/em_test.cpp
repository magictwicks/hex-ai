#include <emscripten/bind.h>

using namespace emscripten;

class EmscriptenTest {
public:
    EmscriptenTest() = default;

    void set(int x, int y) { board[x][y] = 1; }
    void wipe(int x, int y) { board[x][y] = 0; }
    signed char query(int x, int y) { return board[x][y]; }
private:
    signed char board[2][2] = { 0 };
};

EmscriptenTest *ETinstantiate() { return new EmscriptenTest(); }

void ETset(int x, int y, EmscriptenTest *t) { t->set(x, y); }

void ETwipe(int x, int y, EmscriptenTest *t) { t->wipe(x, y); }

signed char ETquery(int x, int y, EmscriptenTest *t) { return t->query(x, y); }

void ETdestroy(EmscriptenTest *t) { delete t; }

EMSCRIPTEN_BINDINGS(TestModule) {
    function("ETinstantiate", &ETinstantiate);
    function("ETset", &ETset);
    function("ETwipe", &ETwipe);
    function("ETquery", &ETquery);
    function("ETdestroy", &ETdestroy);
}

